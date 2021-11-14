import { Injectable } from '@nestjs/common';
import { CreateFibonacci as Fibonacci } from './dto/create-fibonacci.dto';

@Injectable()
export class FibonacciService {
  calcularSerie({ n }: Fibonacci): number[] {
    const numeros = [0, 1];
    for (let i = 2; i < n; i++) {
      numeros[i] = numeros[i - 2] + numeros[i - 1];
    }
    return numeros;
  }
}
