import { Component, OnInit } from '@angular/core';

import { Pricing } from '../data/models.pricing';
import { PricingService } from '../services/pricing.service';

@Component({
  selector: 'app-nails',
  templateUrl: './nails.component.html',
  styleUrls: ['./nails.component.scss']
})
export class NailsComponent implements OnInit {

  headerId: String;
  headerTitle: String;
  headerSubtext: String;
  pricing: Pricing[];

  constructor(private pricingService: PricingService) { }

  ngOnInit() {
    this.getPricing();
    this.headerId = 'nails-header';
    this.headerTitle = 'Nail Treatments';
    // tslint:disable-next-line:max-line-length
    this.headerSubtext = 'Rejuvenate and pamper with a relaxing nail treatment.';
  }

  getPricing(): void {
    this.pricingService.getSpaNailPricing()
      .subscribe(pricing => this.pricing = pricing);
  }

}
