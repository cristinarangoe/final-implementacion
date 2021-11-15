import { Test, TestingModule } from '@nestjs/testing';
import { FactorialController } from './factorial.controller';
import { FactorialService } from './factorial.service';
import {Response} from 'express'

describe('FactorialController', () => {
  let controller: FactorialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactorialController],
      providers: [FactorialService]
    }).compile();

    controller = module.get<FactorialController>(FactorialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

// describe('factorial de n=5', () => {
//   let factorialController: FactorialController;
//   let factorialService: FactorialService;

//   beforeEach(() => {
//     factorialService = new FactorialService();
//     factorialController = new FactorialController(factorialService);
//   });

//   describe('calculaFactorial', () => {
//     it('Deberia devolver el resultado del factorial de -5', async () => {
//       let result = 120
//       jest.spyOn(factorialService, 'calcularFactorial').mockImplementation(() => result);
//       const factorial = {n:5}
//       let response: Response 
//       expect(await factorialController.calcularFactorial(factorial, response)).toBe(result);
//     });
//   });
// });