import { IsNumber, Min } from 'class-validator';

export class CreateCirculo {
  @IsNumber()
  @Min(0.1, { message: 'las dimensiones deben ser positivas mayores a 0' })
  r: number;
}
