import { IsNumber, Min } from 'class-validator';

export class CreateRectangulo {
  @IsNumber()
  @Min(0.1, { message: 'las dimensiones deben ser positivas mayores a 0' })
  largo: number;

  @IsNumber()
  @Min(0.1, { message: 'las dimensiones deben ser positivas mayores a 0' })
  ancho: number;
}
