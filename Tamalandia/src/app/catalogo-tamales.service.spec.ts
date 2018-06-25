import { TestBed, inject } from '@angular/core/testing';

import { CatalogoTamalesService } from './catalogo-tamales.service';

describe('CatalogoTamalesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogoTamalesService]
    });
  });

  it('should be created', inject([CatalogoTamalesService], (service: CatalogoTamalesService) => {
    expect(service).toBeTruthy();
  }));
});
