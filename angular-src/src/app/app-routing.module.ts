import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowPetsComponent } from './show-pets/show-pets.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { AuthGuard } from './auth.guard';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ShowPetsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  {
    path: 'create',
    component: CreateProductComponent,
    canActivate: [AuthGuard]
  },
  { path: 'checkout/:id', component: CheckoutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  ShowPetsComponent,
  PageNotFoundComponent,
  ProductDetailComponent
];
