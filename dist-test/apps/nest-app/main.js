// SHOULD_AT_JS_BANNER
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);
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

// apps/nest-app/src/app/app.controller.ts
var require_app_controller = __commonJS((exports2) => {
  "use strict";
  var __decorate = exports2 && exports2.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.AppController = void 0;
  var common_1 = require("@nestjs/common");
  var AppController = function() {
    function AppController2(appService) {
      this.appService = appService;
    }
    AppController2.prototype.getData = function() {
      return this.appService.getData();
    };
    __decorate([
      common_1.Get()
    ], AppController2.prototype, "getData", null);
    AppController2 = __decorate([
      common_1.Controller()
    ], AppController2);
    return AppController2;
  }();
  exports2.AppController = AppController;
});

// apps/nest-app/src/app/app.service.ts
var require_app_service = __commonJS((exports2) => {
  "use strict";
  var __decorate = exports2 && exports2.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.AppService = void 0;
  var common_1 = require("@nestjs/common");
  var AppService = function() {
    function AppService2() {
    }
    AppService2.prototype.getData = function() {
      return {message: "Welcome to nest-app!"};
    };
    AppService2 = __decorate([
      common_1.Injectable()
    ], AppService2);
    return AppService2;
  }();
  exports2.AppService = AppService;
});

// apps/nest-app/src/app/app.module.ts
var require_app_module = __commonJS((exports2) => {
  "use strict";
  var __decorate = exports2 && exports2.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  Object.defineProperty(exports2, "__esModule", {value: true});
  exports2.AppModule = void 0;
  var common_1 = require("@nestjs/common");
  var app_controller_1 = require_app_controller();
  var app_service_1 = require_app_service();
  var AppModule2 = function() {
    function AppModule3() {
    }
    AppModule3 = __decorate([
      common_1.Module({
        imports: [],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService]
      })
    ], AppModule3);
    return AppModule3;
  }();
  exports2.AppModule = AppModule2;
});

// apps/nest-app/src/main.ts
var import_common = __toModule(require("@nestjs/common"));
var import_core = __toModule(require("@nestjs/core"));
var import_app = __toModule(require_app_module());
async function bootstrap() {
  const app = await import_core.NestFactory.create(import_app.AppModule);
  const globalPrefix = "api";
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    import_common.Logger.log("Listening at http://localhost:" + port + "/" + globalPrefix);
  });
}
bootstrap();
