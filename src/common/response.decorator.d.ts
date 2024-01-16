import { Type } from '@nestjs/common';

export declare const ApiResponse: <TModel extends Type<any>>(
  model?: TModel,
) => <TFunction extends Function, Y>(
  target: object | TFunction,
  propertyKey?: string | symbol,
  descriptor?: TypedPropertyDescriptor<Y>,
) => void;
export declare const ApiListResponse: <TModel extends Type<any>>(
  model: TModel,
) => <TFunction extends Function, Y>(
  target: object | TFunction,
  propertyKey?: string | symbol,
  descriptor?: TypedPropertyDescriptor<Y>,
) => void;
