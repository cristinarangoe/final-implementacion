import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { FactorialService } from './factorial.service';
import { CreateFactorial } from './dto/create-factorial.dto';
import { Response } from 'express';

@Controller('factorial')
export class FactorialController {
  constructor(private factorialService: FactorialService) {}
  @Post()
  async calcularArea(
    @Body(new ValidationPipe()) factorial: CreateFactorial,
    @Res() response: Response,
  ) {
    const calculos = await this.factorialService.calcularFactorial(factorial);

    return response.status(HttpStatus.OK).json(calculos);
  }
}
