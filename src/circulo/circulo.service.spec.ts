import { Test, TestingModule } from '@nestjs/testing';
import { validate } from 'class-validator';
import { CirculoService } from './circulo.service';
import {CreateCirculo} from './dto/create-circulo.dto'

describe('CirculoService', () => {
  let service: CirculoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CirculoService],
    }).compile();

    service = module.get<CirculoService>(CirculoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Calcular con radio de 5', () => {
    const circulo={r:5};
    expect(service.calcularValoresCirculo(circulo)).toEqual({area:78.53981633974483,perimetro:31.41592653589793});
  });

  it('Calcular con radio de 10', () => {
    const circulo={r:10};
    expect(service.calcularValoresCirculo(circulo)).toEqual({area:314.1592653589793,perimetro:62.83185307179586});
  });

  it('Deberia devolver errores si r del circulo es de -5 osea < 0',async  () => {
    const circulo = new CreateCirculo()
    circulo.r = -5
    const errors = await validate(circulo)

    expect(errors.length).toBeGreaterThan(0);
  });

  it('Deberia devolver errores si r del circulo es de 0',async  () => {
    const circulo = new CreateCirculo()
    circulo.r = 0
    const errors = await validate(circulo)

    expect(errors.length).toBeGreaterThan(0);
  });
});
