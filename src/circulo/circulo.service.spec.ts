import { Test, TestingModule } from '@nestjs/testing';
import { CirculoService } from './circulo.service';

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
});
