import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { TrianguloService } from './triangulo.service';
import { CreateTriangulo } from './dto/create-triangulo.dto';
import { Response } from 'express';
// import { ValidationPipe } from './BO/validation.pipe';

@Controller('triangulo')
export class TrianguloController {
  constructor(private trianguloService: TrianguloService) {}
  @Post()
  async calcularArea(
    @Body(new ValidationPipe()) triangulo: CreateTriangulo,
    @Res() response: Response,
  ) {
    const calculos = await this.trianguloService.calcularValoresTriangulo(
      triangulo,
    );

    return response.status(HttpStatus.OK).send(calculos);
  }
}
