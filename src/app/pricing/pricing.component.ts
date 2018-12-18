import { Component, OnInit, Input } from '@angular/core';

import { Pricing } from '../data/models.pricing';
import { Rate } from '../data/models.pricing';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  @Input() servicePricing: Pricing;

  constructor() { }

  ngOnInit() {
  }

}
