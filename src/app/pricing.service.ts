import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pricing } from './pricing.models';
import { HairPricing } from './data-pricing-hair';
import { SpaHairPricing } from './data-pricing-spa-hair';
import { SpaNailPricing } from './data-pricing-spa-nail';
import { SpaSkinPricing } from './data-pricing-spa-skin';
import { SpaMassagePricing } from './data-pricing-spa-massage';

@Injectable()
export class PricingService {

  constructor() { }

  getHairPricing(): Observable<Pricing> {
    return of(HairPricing);
  }

  getSpaHairPricing(): Observable<Pricing> {
    return of(SpaHairPricing);
  }

  getSpaNailPricing(): Observable<Pricing> {
    return of(SpaNailPricing);
  }

  getSpaSkinPricing(): Observable<Pricing> {
    return of(SpaSkinPricing);
  }

  getSpaMassagePricing(): Observable<Pricing> {
    return of(SpaMassagePricing);
  }

}
