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
});
