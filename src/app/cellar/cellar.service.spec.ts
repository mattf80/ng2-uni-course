/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CellarService } from './cellar.service';

describe('Service: Cellar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CellarService]
    });
  });

  it('should ...', inject([CellarService], (service: CellarService) => {
    expect(service).toBeTruthy();
  }));
});
