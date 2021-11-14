import { CreateRectangulo as Rectangulo } from './dto/create-reactangulo.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RectanguloService {
  private calcularArea({ largo, ancho }: Rectangulo): number {
    return largo * ancho;
  }

  private calcularPerimetro({ largo, ancho }: Rectangulo): number {
    return 2 * largo + 2 * ancho;
  }

  calcularValoresRectangulo(rectangulo: Rectangulo) {
    return {
      area: this.calcularArea(rectangulo),
      perimetro: this.calcularPerimetro(rectangulo),
    };
  }
}
