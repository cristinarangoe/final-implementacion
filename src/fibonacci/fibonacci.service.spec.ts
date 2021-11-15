import { Test, TestingModule } from '@nestjs/testing';
import { FibonacciService } from './fibonacci.service';
import {CreateFibonacci} from './dto/create-fibonacci.dto'
import { validate } from 'class-validator';

describe('FibonacciService', () => {
  let service: FibonacciService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FibonacciService],
    }).compile();

    service = module.get<FibonacciService>(FibonacciService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Fibonacci de n=5', () => {
    const number=[0,1,1,2,3];
    const fibonacci={n:5};
    expect(service.calcularSerie(fibonacci)).toEqual(number);
  });

  it('Fibonacci de n=10', () => {
    const number=[0,1,1,2,3,5,8,13,21,34];
    const fibonacci={n:10};
    expect(service.calcularSerie(fibonacci)).toEqual(number);
  });

  it('Deberia devolver errores si n fibonacci es de < 0',async  () => {
    const fibonacci = new CreateFibonacci()
    fibonacci.n = -5
    const errors = await validate(fibonacci)

    expect(errors.length).toBeGreaterThan(0);
  });

  it('Deberia devolver errores si n fibonacci es 0',async  () => {
    const fibonacci = new CreateFibonacci()
    fibonacci.n = 0
    const errors = await validate(fibonacci)

    expect(errors.length).toBeGreaterThan(0);
  });
});
