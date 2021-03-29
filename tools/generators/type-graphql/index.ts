import {
  Tree,
  formatFiles,
  installPackagesTask,
  readProjectConfiguration,
  addProjectConfiguration,
  readWorkspaceConfiguration,
  updateWorkspaceConfiguration,
  getProjects,
  generateFiles,
  addDependenciesToPackageJson,
  getWorkspaceLayout,
  offsetFromRoot,
  normalizePath,
  applyChangesToString,
  joinPathFragments,
  names,
} from '@nrwl/devkit';

import { libraryGenerator } from '@nrwl/workspace/generators';
import { Project, StructureKind, SourceFileStructure } from 'ts-morph';
import path from 'path';
import chalk from 'chalk';
import { TypeGraphQLGeneratorSchema, AvaliableLib } from './schema';

function normalizeSchema(
  schema: Partial<TypeGraphQLGeneratorSchema>,
  libNames: Array<string>
): TypeGraphQLGeneratorSchema {
  if (!schema.objectTypeName) {
    throw new Error('ObjectType name required!');
  }

  if (!schema.lib && !libNames.includes('graphql')) {
    console.log("Lib name not specified, using 'graphql'");
    schema.lib = 'graphql';
  } else if (libNames.includes('graphql')) {
    console.log("lib 'graphql' exist, use it as target");
    schema.lib = 'graphql';
  }

  // const { className } = names(schema.objectTypeName);

  return schema as TypeGraphQLGeneratorSchema;
}

export default async function (host: Tree, schema: TypeGraphQLGeneratorSchema) {
  console.log('schema: ', schema);

  const projects = getProjects(host);
  const libs: Array<AvaliableLib> = [];

  projects.forEach((project, libName) => {
    if (project.projectType === 'library') {
      libs.push({
        libName,
        root: project.root,
        sourceRoot: project.sourceRoot,
      });
    }
  });
  const libNames = libs.map((lib) => lib.libName);

  const normalizedSchema = normalizeSchema(schema, libNames);
  console.log('normalizedSchema: ', normalizedSchema);

  if (!libNames.includes(normalizedSchema.lib)) {
    console.log(`Create New Lib ${normalizedSchema.lib}`);
    await libraryGenerator(host, { name: normalizedSchema.lib });
  }

  const libConfig = readProjectConfiguration(host, normalizedSchema.lib);

  const { className, fileName } = names(normalizedSchema.objectTypeName);

  const libSourceRoot = joinPathFragments(libConfig.sourceRoot);
  const libSourceLib = joinPathFragments(libConfig.sourceRoot, 'lib');
  const libSourceIndexFile = path.join(libSourceRoot, './index.ts');

  const indexContent = host.read(libSourceIndexFile).toString('utf-8');

  const dtoNames = generateDTONames(className);

  generateFiles(host, path.join(__dirname, './templates'), libSourceLib, {
    tmpl: '',
    ObjectType: fileName,
    componentName: className,
    ...normalizedSchema,
    ...dtoNames,
  });

  const project = new Project();

  const sourceFile = project.createSourceFile(
    libSourceIndexFile,
    indexContent,
    { overwrite: true }
  );

  sourceFile.addExportDeclaration({
    kind: StructureKind.ExportDeclaration,
    isTypeOnly: false,
    // TODO: support namespace option
    // namespaceExport: 'x',
    // namedExports: ['*'],
    moduleSpecifier: `./lib/${fileName}`,
  });

  host.write(libSourceIndexFile, sourceFile.getFullText());

  await formatFiles(host);

  const deps = composeDepsList(normalizedSchema);
  const devDeps = composeDevDepsList(normalizedSchema);

  addDependenciesToPackageJson(host, deps, devDeps);

  return () => {
    installPackagesTask(host);
  };
}

function generateDTONames(className: string) {
  return {
    CreateDTOClassName: `Create${className}DTO`,
    UpdateDTOClassName: `Update${className}DTO`,
    DeleteDTOClassName: `Deleete${className}DTO`,
  };
}

function composeDepsList(
  schema: TypeGraphQLGeneratorSchema
): Record<string, string> {
  let basic: Record<string, string> = {
    'type-graphql': 'latest',
    graphql: 'latest',
    'reflect-metadata': 'latest',
    [schema.dtoHandler === 'ClassValidator'
      ? 'class-validator'
      : 'joi']: 'latest',
  };

  if (schema.useTypeormEntityDecorator || schema.extendTypeormBaseEntity) {
    basic = {
      ...basic,
      typeorm: 'latest',
    };
  }

  return basic;
}

function composeDevDepsList(
  schema: TypeGraphQLGeneratorSchema
): Record<string, string> {
  const basic = {};

  return basic;
}
