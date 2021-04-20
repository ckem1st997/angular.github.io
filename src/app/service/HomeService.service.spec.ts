/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomeServiceService } from './HomeService.service';

describe('Service: HomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeServiceService]
    });
  });

  it('should ...', inject([HomeServiceService], (service: HomeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
