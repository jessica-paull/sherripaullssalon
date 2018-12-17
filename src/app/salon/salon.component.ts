import { Component, OnInit } from '@angular/core';

import { Pricing } from '../pricing.models';
import { PricingService } from '../pricing.service';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.scss']
})
export class SalonComponent implements OnInit {

  hairPricing: Pricing;

  constructor(private pricingService: PricingService) { }

  ngOnInit() {
      this.getPricing();
  }

  getPricing(): void {
    this.pricingService.getHairPricing()
      .subscribe(pricing => this.hairPricing = pricing);
  }

}
