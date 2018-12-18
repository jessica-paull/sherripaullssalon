import { Component, OnInit } from '@angular/core';

import { Pricing } from '../pricing.models';
import { PricingService } from '../pricing.service';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.scss']
})
export class SpaComponent implements OnInit {

  headerId: String;
  headerTitle: String;
  headerSubtext: String;
  hairPricing: Pricing[];
  nailPricing: Pricing[];
  skinPricing: Pricing[];
  massagePricing: Pricing[];

  constructor(private pricingService: PricingService) { }

  ngOnInit() {
    this.getPricing();
    this.headerId = 'spa-header';
    this.headerTitle = 'Spa Services';
    // tslint:disable-next-line:max-line-length
    this.headerSubtext = 'We invite you to relax and rejuvenate at our spa. Experience balance and restore your mind, body, spirit, and reestablish a sense of health and well-being.';
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
