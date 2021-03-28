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
import path from 'path';
import { TypeGraphQLGeneratorSchema } from './schema';

// steps
// lib是否包含在projects中 不包含 >>> 创建
// TODO: 支持生成到apps下
// 基于ejs与选项 生成文件内容

export default async function (host: Tree, schema: TypeGraphQLGeneratorSchema) {
  console.log('host: ', host);
  console.log('schema: ', schema);
  // await libraryGenerator(host, { name: schema.name });
  const projects = getProjects(host);
  const libs: Array<{ root: string; sourceRoot: string; libName: string }> = [];

  projects.forEach((project, libName) => {
    if (project.projectType === 'library') {
      libs.push({
        libName,
        root: project.root,
        sourceRoot: project.sourceRoot,
      });
    }
  });

  console.log('libs: ', libs);

  // if (!(schema.lib in libs.map((lib) => lib.libName))) {
  //   console.log(`Create New Lib ${schema.lib}`);
  //   await libraryGenerator(host, { name: schema.lib });
  // }

  const libConfig = readProjectConfiguration(host, 'lib1');
  console.log('libConfig: ', libConfig);

  console.log(joinPathFragments(libConfig.sourceRoot));

  const { className, fileName } = names(schema.objectTypeName);

  // 生成文件到 libs/lib1/src 下
  // TODO: 修改libs/lib1/src/index.ts 的export from语句
  generateFiles(
    host,
    path.join(__dirname, './templates'),
    joinPathFragments(libConfig.sourceRoot),
    {
      tmpl: '',
      ObjectType: fileName,
      componentName: className,
    }
  );

  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}
