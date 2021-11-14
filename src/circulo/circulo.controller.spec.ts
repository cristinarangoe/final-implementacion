import { Test, TestingModule } from '@nestjs/testing';
import { CirculoController } from './circulo.controller';
import { CirculoService } from './circulo.service';

describe('CirculoController', () => {
  let controller: CirculoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CirculoController],
      providers: [CirculoService]
    }).compile();

    controller = module.get<CirculoController>(CirculoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
