import { Test, TestingModule } from '@nestjs/testing';
import { TrianguloService } from './triangulo.service';
import {CreateTriangulo} from './dto/create-triangulo.dto'
import { validate } from 'class-validator';

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

  it('Deberia devolver errores si uno de los lados del triangulo es < 0',async  () => {
    const triangulo = new CreateTriangulo()
    triangulo.l1 = -5
    triangulo.l2  = 4
    triangulo.l3  = 3

    const errors = await validate(triangulo)

    expect(errors.length).toBeGreaterThan(0);
  });

  it('Deberia devolver errores si uno de los lados del triangulo es  0',async  () => {
    const triangulo = new CreateTriangulo()
    triangulo.l1 = 0
    triangulo.l2  = 4
    triangulo.l3  = 3

    const errors = await validate(triangulo)

    expect(errors.length).toBeGreaterThan(0);
  });

  it('Deberia devolver errores si todos los lados del triangulo son  0',async  () => {
    const triangulo = new CreateTriangulo()
    triangulo.l1 = 0
    triangulo.l2  = 0
    triangulo.l3  = 0

    const errors = await validate(triangulo)

    expect(errors.length).toBeGreaterThan(0);
  });

  it('Deberia devolver errores si no cumple con las condiciones del tamano de los lados',async  () => {
    const triangulo = new CreateTriangulo()
    triangulo.l1 = 1
    triangulo.l2  = 2
    triangulo.l3  = 11

    const errors = await validate(triangulo)
    

    expect(errors.length).toBeGreaterThan(0);
  });
});
