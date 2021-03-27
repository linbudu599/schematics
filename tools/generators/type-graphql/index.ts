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
  names,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { join } from 'path';

type PrimitivePropsType = number | string | boolean;

interface PropsMetadata {
  type: PrimitivePropsType;
  isArray: boolean;
  nullable: boolean;
}

export interface TypeGraphQLGeneratorSchema {
  objectTypeName: string;
  extendInterfaceType: boolean;
  props: Record<string, PropsMetadata>;
  createDTO: boolean;
  createDTOBy: 'ClassValidator' | 'Joi';
  useTypeormEntityDecorator: boolean;
  extendTypeormBaseEntity: boolean;
  lib: string;
  createLibOnInexist: boolean;
}

export default async function (host: Tree, schema: TypeGraphQLGeneratorSchema) {
  console.log('host: ', host);
  console.log('schema: ', schema);
  // await libraryGenerator(host, { name: schema.name });
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}
