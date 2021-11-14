import { IsInt, Min } from 'class-validator';

export class CreateFibonacci {
  @IsInt({ message: 'n debe ser numero entero' })
  @Min(1, { message: 'n debe ser superior o igual a 1' })
  n: number;
}
