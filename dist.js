"use strict";
var __extends = this && this.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.DeleeteUserDTO = exports.UpdateUserDTO = exports.CreateUserDTO = exports.User = exports.IUser = void 0;
require("reflect-metadata");
var type_graphql_1 = require("type-graphql");
var typeorm_1 = require("typeorm");
var IUser = function() {
  function IUser2() {
  }
  IUser2 = __decorate([
    type_graphql_1.InterfaceType({description: "User Interface Type"})
  ], IUser2);
  return IUser2;
}();
exports.IUser = IUser;
var User = function(_super) {
  __extends(User2, _super);
  function User2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  User2 = __decorate([
    type_graphql_1.ObjectType({implements: IUser}),
    typeorm_1.Entity()
  ], User2);
  return User2;
}(typeorm_1.BaseEntity);
exports.User = User;
var CreateUserDTO = function() {
  function CreateUserDTO2() {
  }
  CreateUserDTO2 = __decorate([
    type_graphql_1.InputType()
  ], CreateUserDTO2);
  return CreateUserDTO2;
}();
exports.CreateUserDTO = CreateUserDTO;
var UpdateUserDTO = function() {
  function UpdateUserDTO2() {
  }
  UpdateUserDTO2 = __decorate([
    type_graphql_1.InputType()
  ], UpdateUserDTO2);
  return UpdateUserDTO2;
}();
exports.UpdateUserDTO = UpdateUserDTO;
var DeleeteUserDTO = function() {
  function DeleeteUserDTO2() {
  }
  DeleeteUserDTO2 = __decorate([
    type_graphql_1.InputType()
  ], DeleeteUserDTO2);
  return DeleeteUserDTO2;
}();
exports.DeleeteUserDTO = DeleeteUserDTO;
