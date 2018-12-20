import { Component, OnInit } from '@angular/core';

import { ShopItem } from '../data/models.shopping';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  shopItems: ShopItem[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.shoppingService.getShopItems()
      .subscribe(shopItems => this.shopItems = shopItems);
  }

}
