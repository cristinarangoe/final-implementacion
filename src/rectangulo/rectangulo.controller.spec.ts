import { Test, TestingModule } from '@nestjs/testing';
import { RectanguloController } from './rectangulo.controller';

describe('RectanguloController', () => {
  let controller: RectanguloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RectanguloController],
    }).compile();

    controller = module.get<RectanguloController>(RectanguloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
