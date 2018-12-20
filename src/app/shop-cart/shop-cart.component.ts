import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of, Subscription } from 'rxjs';

import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';

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

  private initPaypalConfig(): void {
    this.payPalConfig = new PayPalConfig(
      PayPalIntegrationType.ClientSideREST,
      PayPalEnvironment.Sandbox,
      {
        commit: true,
        client: {
          sandbox:
            'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R'
        },
        button: {
          label: 'paypal',
          layout: 'vertical'
        },
        onAuthorize: (data, actions) => {
          console.log('Authorize');
          return of(undefined);
        },
        onPaymentComplete: (data, actions) => {
          console.log('OnPaymentComplete');
        },
        onCancel: (data, actions) => {
          console.log('OnCancel');
        },
        onError: err => {
          console.log('OnError');
        },
        onClick: () => {
          console.log('onClick');
        },
        validate: (actions) => {
          console.log(actions);
        },
        experience: {
          noShipping: true,
          brandName: 'Sherri Paull\'s Salon & Spa'
        },
        transactions: [
          {
            amount: {
              // total: 30.11,
              total: 0,
              currency: 'USD'
              // details: {
              //   subtotal: 30.00,
              //   tax: 0.07,
              //   shipping: 0.03,
              //   handling_fee: 1.00,
              //   shipping_discount: -1.00,
              //   insurance: 0.01
              // }
            },
            item_list: {
              items: [
                // {
                //   name: 'hat',
                //   description: 'Brown hat.',
                //   quantity: 5,
                //   price: 3,
                //   tax: 0.01,
                //   sku: '1',
                //   currency: 'USD'
                // }
              ],
              // shipping_address: {
              //   recipient_name: 'Brian Robinson',
              //   line1: '4th Floor',
              //   line2: 'Unit #34',
              //   city: 'San Jose',
              //   country_code: 'US',
              //   postal_code: '95131',
              //   phone: '011862212345678',
              //   state: 'CA'
              // }
            }
          }
        ],
        note_to_payer: 'Contact us if you have trouble processing payment'
      }
    );
  }

}
