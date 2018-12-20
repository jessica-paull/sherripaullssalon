import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxPayPalModule } from 'ngx-paypal';

import { PricingService } from './services/pricing.service';
import { EmployeeService } from './services/employee.service';
import { ShoppingService } from './services/shopping.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { SalonComponent } from './salon/salon.component';
import { SpaComponent } from './spa/spa.component';
import { StaffComponent } from './staff/staff.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { PricingComponent } from './pricing/pricing.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SalonComponent,
    SpaComponent,
    StaffComponent,
    ContactComponent,
    ShopComponent,
    ShopItemComponent,
    ShopCartComponent,
    PricingComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxPayPalModule
  ],
  providers: [ PricingService, EmployeeService, ShoppingService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
