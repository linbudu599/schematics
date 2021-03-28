type PrimitivePropsType = number | string | boolean;

interface PropsMetadata {
  type: PrimitivePropsType;
  isArray: boolean;
  nullable: boolean;
}

interface AvaliableLib {
  root: string;
  sourceRoot: string;
  libName: string;
}

export interface TypeGraphQLGeneratorSchema {
  objectTypeName: string;
  extendInterfaceType: boolean;
  // props: Record<string, PropsMetadata>;
  createDTO: boolean;
  createDTOBy: 'ClassValidator' | 'Joi';
  useTypeormEntityDecorator: boolean;
  extendTypeormBaseEntity: boolean;
  lib: string;
  createLibOnInexist: boolean;
  // exportNameSpace: string;
}
