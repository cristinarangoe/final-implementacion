import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { FibonacciService } from './fibonacci.service';
import { CreateFibonacci } from './dto/create-fibonacci.dto';
import { Response } from 'express';

@Controller('fibonacci')
export class FibonacciController {
  constructor(private fibonacciService: FibonacciService) {}
  @Post()
  async calcularArea(
    @Body(new ValidationPipe()) fibonacci: CreateFibonacci,
    @Res() response: Response,
  ) {
    // const { largo, ancho } = circulo;
    const calculos = await this.fibonacciService.calcularSerie(fibonacci);

    return response.status(HttpStatus.OK).send(calculos);
  }
}
