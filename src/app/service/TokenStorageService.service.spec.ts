/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TokenStorageServiceService } from './TokenStorageService.service';

describe('Service: TokenStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenStorageServiceService]
    });
  });

  it('should ...', inject([TokenStorageServiceService], (service: TokenStorageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
