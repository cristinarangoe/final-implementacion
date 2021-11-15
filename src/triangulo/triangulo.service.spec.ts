import { Test, TestingModule } from '@nestjs/testing';
import { TrianguloService } from './triangulo.service';

describe('TrianguloService', () => {
  let service: TrianguloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrianguloService],
    }).compile();

    service = module.get<TrianguloService>(TrianguloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
  it('Calcular con lados de 3,4,5', () => {
    const Triangulo={l1:3,l2:4,l3:5};
    expect(service.calcularValoresTriangulo(Triangulo)).toEqual({area:6,perimetro:12})
  });

  it('Calcular con lados de 10,15,12', () => {
    const Triangulo={l1:10,l2:15,l3:12};
    expect(service.calcularValoresTriangulo(Triangulo)).toEqual({area:59.81168364124187,perimetro:37})
  });
  
});
