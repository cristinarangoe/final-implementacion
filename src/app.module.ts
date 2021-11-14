import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RectanguloController } from './rectangulo/rectangulo.controller';
import { FactorialController } from './factorial/factorial.controller';
import { FibonacciController } from './fibonacci/fibonacci.controller';
import { TrianguloController } from './triangulo/triangulo.controller';
import { CirculoController } from './circulo/circulo.controller';
import { CirculoService } from './circulo/circulo.service';
import { TrianguloService } from './triangulo/triangulo.service';
import { RectanguloService } from './rectangulo/rectangulo.service';
import { FibonacciService } from './fibonacci/fibonacci.service';
import { FactorialService } from './factorial/factorial.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    RectanguloController,
    FactorialController,
    FibonacciController,
    TrianguloController,
    CirculoController,
  ],
  providers: [
    AppService,
    CirculoService,
    TrianguloService,
    RectanguloService,
    FibonacciService,
    FactorialService,
  ],
})
export class AppModule {}
