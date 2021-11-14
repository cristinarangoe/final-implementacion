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
});
