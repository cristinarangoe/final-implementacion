import { Injectable } from '@nestjs/common';
import { CreateFactorial as Factorial } from './dto/create-factorial.dto';

@Injectable()
export class FactorialService {
  calcularFactorial({ n }: Factorial): number {
    const serie = [1];
    for (let i = 1; i <= n; i++) {
      serie[i] = i * serie[i - 1];
    }
    console.log(serie[serie.length - 1]);
    const resultado = serie[serie.length - 1];

    return resultado;
  }
}
