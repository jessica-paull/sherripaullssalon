import { Component, OnInit } from '@angular/core';

import { Pricing } from '../data/models.pricing';
import { PricingService } from '../services/pricing.service';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.scss']
})
export class SalonComponent implements OnInit {

  headerId: String;
  headerTitle: String;
  headerSubtext: String;
  pricing: Pricing[];

  constructor(private pricingService: PricingService) { }

  ngOnInit() {
      this.getPricing();
      this.headerId = 'hair-header';
      this.headerTitle = 'Hair Services';
      // tslint:disable-next-line:max-line-length
      this.headerSubtext = 'Feel confident in trying any one of our team members to achieve your desired style. Whether you choose cut, color, or styling our team is consistently trained and educated to keep up with the latest fashions and trends for your best individual style.';
  }

  getPricing(): void {
    this.pricingService.getHairPricing()
      .subscribe(pricing => this.pricing = pricing);
  }

}
