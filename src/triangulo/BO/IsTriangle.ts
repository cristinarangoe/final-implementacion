import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsTriangle(
  property: string[],
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isTriangle',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [...property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const relatedPropertyName = args.constraints;
          const relatedValue: number[] = [];
          for (let index = 0; index < relatedPropertyName.length; index++) {
            const element = relatedPropertyName[index];
            relatedValue.push((args.object as any)[element]);
          }

          return (
            typeof value === 'number' &&
            typeof relatedValue === 'object' &&
            value < relatedValue.reduce((p, c) => p + c)
          ); // you can return a Promise<boolean> here as well, if you want to make async validation
        },
      },
    });
  };
}
