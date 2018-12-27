/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CarShopingService } from './car-shoping.service';

describe('CarShopingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarShopingService]
    });
  });

  it('should ...', inject([CarShopingService], (service: CarShopingService) => {
    expect(service).toBeTruthy();
  }));
});
