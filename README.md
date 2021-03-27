# schematics

Schematics/Builders/Generators Collection of Angular/React/Nest/Nx/GraphQL

- Generator(nx): invoke by `nx generate`.
- Executor(nx): invoke by `nx run <action>` / `nx <action>`.
- Builder(nx) / Cli-Builder(ng): Customizing the build process.
- Schematics: Generated Files.



- Generator组成

  - Schema：描述generator的输入

  - Implementation：接受输入并最终负责更改文件系统 

  - 示例：

    ```json
    {
      "cli": "nx",
      "id": "CustomGenerator",
      "description": "Create a custom generator",
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Generator name",
          "x-prompt": "What name would you like to use for the workspace generator?"
        },
        "skipFormat": {
          "description": "Skip formatting files",
          "type": "boolean",
          "alias": "sf",
          "default": false
        }
      },
      "required": ["name"]
    }
    ```

    这个示例接受`name`和`skipFormat`两个选项（类似inquirer，同样也支持其他的问题类型）。
    
  - 实现函数会获得两个参数：
  
    - tree，文件系统的抽象结构，基于此来读写文件。使用树形结构使得可以通过`--dry-run`选项来测试不同选项。
    - options，用户输入，由Schema所描述
  
  - 实现函数可以返回一个回调函数，来在完成变更后执行操作，比如安装新的依赖。
  
  - generator都是原子化的，所以很容易被组合起来
  
  - 使用 createTreeWithEmptyWorkspace 来测试Generator
  
  - 使用@nrwl/nx-devkit提供的各种API

  - `nx generate @nrwl/workspace:workspace-generator my-generator`

  - `nx workspace-generator my-generator mylib`
