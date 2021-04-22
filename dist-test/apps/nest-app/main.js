// SHOULD_AT_JS_BANNER
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// apps/nest-app/src/main.ts
var import_common4 = __toModule(require("@nestjs/common"));
var import_core = __toModule(require("@nestjs/core"));

// apps/nest-app/src/app/app.module.ts
var import_common3 = __toModule(require("@nestjs/common"));

// apps/nest-app/src/app/app.controller.ts
var import_common = __toModule(require("@nestjs/common"));
var AppController = class {
  constructor(appService) {
    this.appService = appService;
  }
  getData() {
    return this.appService.getData();
  }
};
__decorateClass([
  (0, import_common.Get)()
], AppController.prototype, "getData", 1);
AppController = __decorateClass([
  (0, import_common.Controller)()
], AppController);

// apps/nest-app/src/app/app.service.ts
var import_common2 = __toModule(require("@nestjs/common"));
var AppService = class {
  getData() {
    return {message: "Welcome to nest-app!"};
  }
};
AppService = __decorateClass([
  (0, import_common2.Injectable)()
], AppService);

// apps/nest-app/src/app/app.module.ts
var AppModule = class {
};
AppModule = __decorateClass([
  (0, import_common3.Module)({
    imports: [],
    controllers: [AppController],
    providers: [AppService]
  })
], AppModule);

// apps/nest-app/src/environments/environment.prod.ts
var environment = {
  production: true
};

// apps/nest-app/src/main.ts
console.log("environment: ", environment);
async function bootstrap() {
  console.log(111);
  const app = await import_core.NestFactory.create(AppModule);
  const globalPrefix = "api";
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  console.log(3423321);
  await app.listen(port, () => {
    import_common4.Logger.log("Listening at http://localhost:" + port + "/" + globalPrefix);
  });
}
bootstrap();
