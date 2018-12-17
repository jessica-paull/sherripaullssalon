import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PricingService } from './pricing.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { SalonComponent } from './salon/salon.component';
import { SpaComponent } from './spa/spa.component';
import { StaffComponent } from './staff/staff.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { PricingComponent } from './pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SalonComponent,
    SpaComponent,
    StaffComponent,
    ContactComponent,
    ShopComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ PricingService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
