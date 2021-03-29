import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { RegisterComponent } from './componets/register/register.component';
import { ProductComponent } from './componets/product/product.component';
import { CustomerComponent } from './componets/customer/customer.component';
import { ProductAddComponent } from './componets/product-add/product-add.component';
import { LoginComponent } from './componets/login/login.component';
 
const routes: Routes = [ 
  {path:"",pathMatch:"full",component:ProductComponent},
  {path:"login",component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"products",component:ProductComponent},
  {path:"customers",component:CustomerComponent},
  {path:"products/category/:categoryID",component:ProductComponent},
  {path:"products/add",component:ProductAddComponent, canActivate:[LoginGuard]},
  // {path:'**',redirectTo:''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
