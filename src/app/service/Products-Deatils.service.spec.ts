/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductsDeatilsService } from './Products-Deatils.service';

describe('Service: ProductsDeatils', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsDeatilsService]
    });
  });

  it('should ...', inject([ProductsDeatilsService], (service: ProductsDeatilsService) => {
    expect(service).toBeTruthy();
  }));
});
