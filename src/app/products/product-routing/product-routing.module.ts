import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from '../products.component';
import {ProductDetailComponent} from '../product-detail.component';
import {ProductGuardService} from '../product-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductGuardService]}
    ])
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
