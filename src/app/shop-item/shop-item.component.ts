import { Component, OnInit, Input } from '@angular/core';

import { ShoppingService } from '../services/shopping.service';
import { ShopItem } from '../data/models.shopping';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {

  @Input() shopItem: ShopItem;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  addToCart(shopItem: ShopItem): void {
    this.shoppingService.addToCart(shopItem);
  }

}
