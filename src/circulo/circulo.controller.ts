import { Body, Controller, HttpStatus, Post, Res, ValidationPipe } from '@nestjs/common';
import { CirculoService } from './circulo.service';
import { CreateCirculo } from './dto/create-circulo.dto';
import { Response } from 'express';


@Controller('circulo')
export class CirculoController {
  constructor(private circuloService: CirculoService) {}
  @Post()
  async calcularArea(
    @Body(new ValidationPipe()) circulo: CreateCirculo,
    @Res() response: Response,
  ) {
    // const { largo, ancho } = circulo;
    const calculos = await this.circuloService.calcularValoresCirculo(circulo);

    return response.status(HttpStatus.OK).send(calculos);
  }
}
