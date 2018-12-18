import { Component, OnInit, Input } from '@angular/core';

import { Pricing } from '../pricing.models';
import { Rate } from '../pricing.models';

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
