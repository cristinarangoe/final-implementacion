import { IsNumber, Min } from 'class-validator';
import { IsTriangle } from '../BO/IsTriangle';
export class CreateTriangulo {
  @IsNumber()
  @Min(0.1, { message: 'las dimensiones deben ser positivas mayores a 0' })
  @IsTriangle(['l2', 'l3'], {
    message: 'no cumple con las reglas de un triangulo',
  })
  l1: number;

  @IsNumber()
  @Min(0.1, { message: 'las dimensiones deben ser positivas mayores a 0' })
  @IsTriangle(['l1', 'l3'], {
    message: 'no cumple con las reglas de un triangulo',
  })
  l2: number;

  @IsNumber()
  @Min(0.1, { message: 'las dimensiones deben ser positivas mayores a 0' })
  @IsTriangle(['l2', 'l1'], {
    message: 'no cumple con las reglas de un triangulo',
  })
  l3: number;
}
