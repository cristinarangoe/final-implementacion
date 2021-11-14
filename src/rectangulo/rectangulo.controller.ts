import {
  Controller,
  Post,
  Res,
  HttpStatus,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { RectanguloService } from './rectangulo.service';
import { Response } from 'express';
import { CreateRectangulo } from './dto/create-reactangulo.dto';

@Controller('rectangulo')
export class RectanguloController {
  constructor(private rectanguloService: RectanguloService) {}
  @Post()
  async calcularArea(
    @Body(new ValidationPipe()) rectangulo: CreateRectangulo,
    @Res() response: Response,
  ) {
    // const { largo, ancho } = rectangulo;
    const calculos = await this.rectanguloService.calcularValoresRectangulo(
      rectangulo,
    );

    return response.status(HttpStatus.OK).send(calculos);
  }
}
