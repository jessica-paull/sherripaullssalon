import { Injectable } from '@angular/core';

import { Observable, Observer, of } from 'rxjs';

import { StorageService } from './storage.service';
import { ShoppingCart } from '../data/models.shopping';
import { ShopItem } from '../data/models.shopping';
import { ShopItems } from '../data/data-shop-items';

const CART_KEY = 'cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private storage: Storage;
  private subscriptionObservable: Observable<ShoppingCart>;
  private subscribers: Array<Observer<ShoppingCart>> = new Array<Observer<ShoppingCart>>();

  constructor(private storageService: StorageService) {
    this.storage = this.storageService.get();
    this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
      this.subscribers.push(observer);
      observer.next(this.retrieveCart());
      return () => {
        this.subscribers = this.subscribers.filter((obs) => obs !== observer);
      };
    });
  }

  getShopItems(): Observable<ShopItem[]> {
    return of(ShopItems);
  }

  getCart(): Observable<ShoppingCart> {
    return this.subscriptionObservable;
  }

  addToCart(shopItem: ShopItem): void {
    const cart = this.retrieveCart();
    const item = cart.items.find((p) => p.sku === shopItem.sku && p.price === shopItem.price);
    if (item === undefined) {
      const newItem = Object.assign({}, shopItem);
      cart.items.push(newItem);
    } else {
      item.quantity += 1;
    }

    this.calculateCart(cart);
    this.saveCart(cart);
    this.dispatchCart(cart);
  }

  removeFromCart(shopItem: ShopItem): void {
    const cart = this.retrieveCart();
    cart.items = cart.items.filter((p) => p.sku !== shopItem.sku || p.price !== shopItem.price);
    this.calculateCart(cart);
    this.saveCart(cart);
    this.dispatchCart(cart);
  }

  emptyCart(): void {
    const newCart = new ShoppingCart();
    this.saveCart(newCart);
    this.dispatchCart(newCart);
  }

  recalculateCart(shopItem: ShopItem): void {
    const cart = this.retrieveCart();
    const item = cart.items.find((p) => p.sku === shopItem.sku);
    if (item) {
      item.quantity = shopItem.quantity;
    }
    this.calculateCart(cart);
    this.saveCart(cart);
    this.dispatchCart(cart);
  }

  private calculateCart(cart: ShoppingCart): void {
    cart.itemsTotal = cart.items
                          .map((item) => item.quantity * item.price)
                          .reduce((previous, current) => previous + current, 0);
  }

  private retrieveCart(): ShoppingCart {
    const cart = new ShoppingCart();
    const storedCart = this.storage.getItem(CART_KEY);
    if (storedCart) {
      cart.updateFrom(JSON.parse(storedCart));
    }

    return cart;
  }

  private dispatchCart(cart: ShoppingCart): void {
    this.subscribers
        .forEach((sub) => {
          try {
            sub.next(cart);
          } catch (e) {
            // we want all subscribers to get the update even if one errors.
            console.log(e);
          }
        });
  }

  private saveCart(cart: ShoppingCart): void {
    this.storage.setItem(CART_KEY, JSON.stringify(cart));
  }

}
