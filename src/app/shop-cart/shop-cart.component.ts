import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, Subscription } from 'rxjs';

import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType, IPayPalTransactionItem } from 'ngx-paypal';

import { ShoppingCart } from '../data/models.shopping';
import { ShopItem } from '../data/models.shopping';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit {

  payPalConfig?: PayPalConfig;
  shopCartItems: ShopItem[];
  shoppingCart: Observable<ShoppingCart>;
  cartTotal: number;
  cartCount: number;

  private cartSubscription: Subscription;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.cartTotal = 0;
    this.cartCount = 0;
    this.initPaypalConfig();
    this.shoppingCart = this.shoppingService.getCart();
    this.cartSubscription = this.shoppingCart.subscribe((cart) => {
      this.cartTotal = cart.itemsTotal;
      this.cartCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
      this.shopCartItems = cart.items;
    });
  }

  OnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  calculateCart(shopItem: ShopItem): void {
    shopItem.quantity = shopItem.quantity ? shopItem.quantity : 1;
    this.shoppingService.recalculateCart(shopItem);
  }

  emptyCart(): void {
    this.shoppingService.emptyCart();
  }

  removeFromCart(shopItem: ShopItem): void {
    this.shoppingService.removeFromCart(shopItem);
  }

  private initPaypalConfig(): void {
    this.payPalConfig = new PayPalConfig(
      PayPalIntegrationType.ClientSideREST,
      PayPalEnvironment.Sandbox,
      {
        commit: true,
        client: {
          sandbox:
            'AeXnnPbGFM6oUzgbEc0SUt0k6nP5K2Pyblljqgo8u0u5h7sc1W1FdhWo-gDAUndqkpdXslcB6gT-tIMA'
        },
        button: {
          label: 'paypal',
          layout: 'vertical'
        },
        onAuthorize: (data, actions) => {
          return of(undefined);
        },
        onPaymentComplete: (data, actions) => {
          document.getElementById('showConfirmationModal').click();
          this.emptyCart();
        },
        onCancel: (data, actions) => {
          // console.log('OnCancel');
        },
        onError: err => {
          console.log('OnError' + err);
        },
        onClick: () => {
          const items = [];
          for (let i = 0; i < this.shopCartItems.length; i++) {
            const item = this.shopCartItems[i];
            items.push({
              name: item.name,
              description: item.desc,
              quantity: item.quantity,
              price: item.price,
              tax: item.tax,
              sku: item.sku,
              currency: item.currency
            });
          }
          this.payPalConfig.transactions = [
            {
              amount: {
                total: this.cartTotal,
                currency: 'USD'
              },
              item_list: {
                items: items
              }
            }
          ];
        },
        validate: (actions) => {
          console.log(actions);
        },
        experience: {
          noShipping: false,
          brandName: 'Sherri Paull\'s Salon & Spa'
        },
        transactions: [],
        note_to_payer: 'Contact us if you have trouble processing payment'
      }
    );
  }

}
