import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './componets/product/product.component';
import { CustomerComponent } from './componets/customer/customer.component';
import { ProductAddComponent } from './componets/product-add/product-add.component';

const routes: Routes = [ 
  {path:"",pathMatch:"full",component:ProductComponent},
  {path:"products",component:ProductComponent},
  {path:"customers",component:CustomerComponent},
  {path:"products/category/:categoryID",component:ProductComponent},
  {path:"products/add",component:ProductAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
