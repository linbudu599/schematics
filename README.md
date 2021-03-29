# schematics

<!-- Schematics/Builders/Generators Collection of Angular/React/Nest/Nx/GraphQL

- Generator(nx): invoke by `nx generate`.
- Executor(nx): invoke by `nx run <action>` / `nx <action>`.
- Builder(nx) / Cli-Builder(ng): Customizing the build process.
- Schematics: Generated Files. -->

## Generator

- `nx generate @nrwl/workspace:workspace-generator my-generator`
- `nx workspace-generator my-generator mylib`

### TypeGraphQL

#### ObjectType

[schema](tools/generators/type-graphql/schema.d.ts):

```ts
export interface TypeGraphQLObjectTypeSchema {
  objectTypeName: string;
  extendInterfaceType: boolean;
  generateDTO: boolean;
  dtoHandler: 'ClassValidator' | 'Joi';
  useTypeormEntityDecorator: boolean;
  extendTypeormBaseEntity: boolean;
  lib: string;
  createLibOnInexist: boolean;
}
```

support:

- [x] Create class decorated by `@ObjectType()`.
- [x] Implement `@InterfaceType()`.
- [x] Generate create/update/delete DTO.
- [x] Use `Class-Validator` / `Joi` as schema validator.
- [x] Integrate TypeORM `@Entity()`.
- [x] Integrate TypeORM `BaseEntity`.
- [ ] Specify namespace export in index file, e.g: `export * as UserObjectType from "./user.type.ts"`.
- [ ] Generate primitive props with ObjectType & DTO.

#### Resolver

**WIP**

#### Middleware

**WIP**

#### Utils

**WIP**

- Directives (by GraphQL-Tools)
- Extensions
- AuthChecker


### MidwayJS

**WIP**

### Prisma

**WIP**
