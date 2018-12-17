import { Component, OnInit } from '@angular/core';

import { Pricing } from '../pricing.models';
import { PricingService } from '../pricing.service';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.component.html',
  styleUrls: ['./spa.component.scss']
})
export class SpaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
