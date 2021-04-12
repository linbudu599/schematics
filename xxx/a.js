"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleeteUserDTO = exports.UpdateUserDTO = exports.CreateUserDTO = exports.User = exports.IUser = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let IUser = class IUser {
};
IUser = tslib_1.__decorate([
    type_graphql_1.InterfaceType({ description: 'User Interface Type' })
], IUser);
exports.IUser = IUser;
let User = class User extends typeorm_1.BaseEntity {
};
User = tslib_1.__decorate([
    type_graphql_1.ObjectType({ implements: IUser }),
    typeorm_1.Entity()
], User);
exports.User = User;
let CreateUserDTO = class CreateUserDTO {
};
CreateUserDTO = tslib_1.__decorate([
    type_graphql_1.InputType()
], CreateUserDTO);
exports.CreateUserDTO = CreateUserDTO;
let UpdateUserDTO = class UpdateUserDTO {
};
UpdateUserDTO = tslib_1.__decorate([
    type_graphql_1.InputType()
], UpdateUserDTO);
exports.UpdateUserDTO = UpdateUserDTO;
let DeleeteUserDTO = class DeleeteUserDTO {
};
DeleeteUserDTO = tslib_1.__decorate([
    type_graphql_1.InputType()
], DeleeteUserDTO);
exports.DeleeteUserDTO = DeleeteUserDTO;
//# sourceMappingURL=a.js.map