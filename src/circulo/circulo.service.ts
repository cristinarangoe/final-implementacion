import { Injectable } from '@nestjs/common';
import { CreateCirculo as Circulo } from './dto/create-circulo.dto';

@Injectable()
export class CirculoService {
  private calcularArea({ r }: Circulo): number {
    return Math.PI * Math.pow(r,2);
  }

  private calcularPerimetro({ r }: Circulo): number {
    return 2 * Math.PI * r;
  }

  calcularValoresCirculo(circulo: Circulo) {
    return {
      area: this.calcularArea(circulo),
      perimetro: this.calcularPerimetro(circulo),
    };
  }
}
