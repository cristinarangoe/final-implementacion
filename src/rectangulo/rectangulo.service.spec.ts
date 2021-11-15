import { Test, TestingModule } from '@nestjs/testing';
import { RectanguloService } from './rectangulo.service';
import {CreateRectangulo} from './dto/create-reactangulo.dto'
import { validate } from 'class-validator';

describe('RectanguloService', () => {
  let service: RectanguloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RectanguloService],
    }).compile();

    service = module.get<RectanguloService>(RectanguloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Calcular con ancho de 10 y largo de 20', () => {
    const Rectangulo={ancho:10, largo:20};
    expect(service.calcularValoresRectangulo(Rectangulo)).toEqual({area:200,perimetro:60})
  });

  it('Calcular con ancho de 15 y largo de 25', () => {
    const Rectangulo={ancho:15, largo:25};
    expect(service.calcularValoresRectangulo(Rectangulo)).toEqual({area:375,perimetro:80})
  });

  it('Deberia devolver errores si ambos lados del rectangulo son < 0',async  () => {
    const rectangulo = new CreateRectangulo()
    rectangulo.largo = -5
    rectangulo.ancho = -10

    const errors = await validate(rectangulo)

    expect(errors.length).toBeGreaterThan(0);
  });

  it('Deberia devolver errores si el largo del rectangulo es < 0',async  () => {
    const rectangulo = new CreateRectangulo()
    rectangulo.largo = -5
    rectangulo.ancho = 10

    const errors = await validate(rectangulo)

    expect(errors.length).toBeGreaterThan(0);
  });

  it('Deberia devolver errores si un lado del recutangolo es de 0',async  () => {
    const rectangulo = new CreateRectangulo()
    rectangulo.largo = 0
    rectangulo.ancho = 2

    const errors = await validate(rectangulo)

    expect(errors.length).toBeGreaterThan(0);
  });
});
