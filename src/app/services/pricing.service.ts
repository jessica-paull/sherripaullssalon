import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pricing } from '../data/models.pricing';
import { HairPricing } from '../data/data-pricing-hair';
import { SpaHairPricing } from '../data/data-pricing-spa-hair';
import { SpaNailPricing } from '../data/data-pricing-spa-nail';
import { SpaSkinPricing } from '../data/data-pricing-spa-skin';
import { SpaMassagePricing } from '../data/data-pricing-spa-massage';

@Injectable({
  providedIn: 'root'
})
export class PricingService {

  constructor() { }

  getHairPricing(): Observable<Pricing[]> {
    return of(HairPricing);
  }

  getSpaHairPricing(): Observable<Pricing[]> {
    return of(SpaHairPricing);
  }

  getSpaNailPricing(): Observable<Pricing[]> {
    return of(SpaNailPricing);
  }

  getSpaSkinPricing(): Observable<Pricing[]> {
    return of(SpaSkinPricing);
  }

  getSpaMassagePricing(): Observable<Pricing[]> {
    return of(SpaMassagePricing);
  }

}
