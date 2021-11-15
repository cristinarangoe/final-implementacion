import { IsInt, Min } from 'class-validator';

export class CreateFactorial {
  @IsInt({ message: 'n debe ser numero entero' })
  @Min(0, { message: 'n debe ser superior o igual a 0' })
  n: number;
}
