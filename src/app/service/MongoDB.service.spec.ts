/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MongoDBService } from './MongoDB.service';

describe('Service: MongoDB', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MongoDBService]
    });
  });

  it('should ...', inject([MongoDBService], (service: MongoDBService) => {
    expect(service).toBeTruthy();
  }));
});
