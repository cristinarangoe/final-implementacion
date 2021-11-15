import { Test, TestingModule } from '@nestjs/testing';
import { CreateFactorial } from './dto/create-factorial.dto';
import { FactorialService } from './factorial.service';
import { validate } from 'class-validator';


describe('FactorialService', () => {
  let service: FactorialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactorialService],
    }).compile();

    service = module.get<FactorialService>(FactorialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('FactorialService prueba unitaria calculo factorial del nuemro 5', () => {
  let service: FactorialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactorialService],
    }).compile();

    service = module.get<FactorialService>(FactorialService);
  });

  it('Deberia devolver el resultado del factorial de 5', () => {
    const factorial: CreateFactorial = {n:5}
    expect(service.calcularFactorial(factorial)).toEqual(120);
  });

  it('Deberia devolver el resultado del factorial de 0', () => {
    const factorial: CreateFactorial = {n:0}
    expect(service.calcularFactorial(factorial)).toEqual(1);
  });

   it('Deberia devolver errores si n factorial es de -5',async  () => {
    const factorial = new CreateFactorial()
    factorial.n = -5
    const errors = await validate(factorial)

    expect(errors.length).toBeGreaterThan(0);
  });

});
