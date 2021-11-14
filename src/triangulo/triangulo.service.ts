import { Injectable } from '@nestjs/common';
import { CreateTriangulo as Triangulo } from './dto/create-triangulo.dto';

@Injectable()
export class TrianguloService {
  private calcularArea({ l1, l2, l3 }: Triangulo): number {
    const semiperimetro: number = this.calcularPerimetro({ l1, l2, l3 }) / 2;
    return Math.sqrt(
      semiperimetro *
        (semiperimetro - l1) *
        (semiperimetro - l2) *
        (semiperimetro - l3),
    );
  }

  private calcularPerimetro({ l1, l2, l3 }: Triangulo): number {
    return l1 + l2 + l3;
  }

  calcularValoresTriangulo(triangulo: Triangulo) {
    return {
      area: this.calcularArea(triangulo),
      perimetro: this.calcularPerimetro(triangulo),
    };
  }
}
