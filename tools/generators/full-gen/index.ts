import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

// readProjectConfiguration 获取项目配置（workspace.json nx.json）
// addProjectConfiguration 新增项目配置
// removeProjectConfiguration
// updateProjectConfiguration
// readWorkspaceConfiguration 获取工作区配置 默认项目、cli设置
// updateWorkspaceConfiguration
// getProjects 项目列表
// generateFiles 基于模板生成文件夹/文件
// formatFiles 基于Prettier格式化生成的文件
// readJson
// writeJson
// updateJson
// addDependenciesToPackageJson 新增依赖到package.json
// installPackagesTask 基于项目包管理器运行install
// names 基于提供的name生成不同字符串 ？
// getWorkspaceLayout 获取新的lib应该被生成到的位置
// offestFromRoot 计算从根目录的偏移 常用于计算相对路径
// stripIndents 移除多行字符串缩进
// normalizePath 获取操作系统的文件分割符
// joinPathFragments
// toJS 将TS文件转换到JS
// visitNotIgnoredFiles 操作所有没有被git ignore的文件
// applyChangesToString 对字符串应用一系列变更 常用于操作AST

export default async function (host: Tree, schema: any) {
  console.log('schema: ', schema);
  await libraryGenerator(host, { name: schema.name });
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}
