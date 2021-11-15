import { Test, TestingModule } from '@nestjs/testing';
import { RectanguloService } from './rectangulo.service';

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
});
