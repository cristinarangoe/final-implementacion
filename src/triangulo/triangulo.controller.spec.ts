import { Test, TestingModule } from '@nestjs/testing';
import { TrianguloController } from './triangulo.controller';
import { TrianguloService } from './triangulo.service';

describe('TrianguloController', () => {
  let controller: TrianguloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrianguloController],
      providers: [TrianguloService]
    }).compile();

    controller = module.get<TrianguloController>(TrianguloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
