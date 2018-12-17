import { Component, OnInit } from '@angular/core';

import { Pricing } from '../pricing.models';
import { PricingService } from '../pricing.service';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.scss']
})
export class SpaComponent implements OnInit {

  hairPricing: Pricing;
  nailPricing: Pricing;
  skinPricing: Pricing;
  massagePricing: Pricing;

  constructor(private pricingService: PricingService) { }

  ngOnInit() {
    this.getPricing();
  }

  getPricing(): void {
    this.pricingService.getSpaHairPricing()
      .subscribe(pricing => this.hairPricing = pricing);

    this.pricingService.getSpaNailPricing()
      .subscribe(pricing => this.nailPricing = pricing);

    this.pricingService.getSpaSkinPricing()
      .subscribe(pricing => this.skinPricing = pricing);

    this.pricingService.getSpaMassagePricing()
      .subscribe(pricing => this.massagePricing = pricing);
  }

}
