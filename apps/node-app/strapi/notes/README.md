# Note

- admin.watchIgnoreFiles似乎不起作用，所以我每次保存note都会重启？阿这
- API的字段保存在api/xxx/models/xxx.setting.json中（models/xxx.js估计是用户手动输入来控制？）。如果要改content-type，就得重启服务，这样就down啦~ 所以不能在生产环境改
- Role based
- config
  - functions 
    - responses 自定义响应，如404.js，这个看起来不是访问admin时404的控制，而是最终API的
    - bootstrap.js 应用启动前执行
    - cron.js 定时任务
  - server.js 项目配置
  - database.js 数据库配置
- extensions
- hooks
- middlewares
- plugins
- public
- ...
