/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhanTrangServiceService } from './PhanTrangService.service';

describe('Service: PhanTrangService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhanTrangServiceService]
    });
  });

  it('should ...', inject([PhanTrangServiceService], (service: PhanTrangServiceService) => {
    expect(service).toBeTruthy();
  }));
});
