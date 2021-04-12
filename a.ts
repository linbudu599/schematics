import 'reflect-metadata';
import { ObjectType, InputType, InterfaceType, Field } from 'type-graphql';

import { Entity, BaseEntity } from 'typeorm';

import { IsString, IsInt, IsBoolean, IsOptional } from 'class-validator';

@InterfaceType({ description: 'User Interface Type' })
export abstract class IUser {}

@ObjectType({ implements: IUser })
@Entity()
export class User extends BaseEntity implements IUser {}

@InputType()
export class CreateUserDTO {}

@InputType()
export class UpdateUserDTO {}

@InputType()
export class DeleeteUserDTO {}
