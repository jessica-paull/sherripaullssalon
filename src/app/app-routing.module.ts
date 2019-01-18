import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SalonComponent } from './salon/salon.component';
import { NailsComponent } from './nails/nails.component';
import { SpaComponent } from './spa/spa.component';
import { StaffComponent } from './staff/staff.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'salon', component: SalonComponent },
  { path: 'nails', component: NailsComponent },
  { path: 'spa', component: SpaComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
