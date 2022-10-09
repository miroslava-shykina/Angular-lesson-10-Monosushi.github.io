import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { ActionsInfoComponent } from './pages/actions-info/actions-info.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { DostavkaTaOplataComponent } from './pages/dostavka-ta-oplata/dostavka-ta-oplata.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

import { AdminComponent } from './admin/admin.component';
import { ActionComponent } from './admin/action/action.component';
import { CategoryComponent } from './admin/category/category.component';
import { ProductComponent } from './admin/product/product.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ProductService } from './shared/services/product/product.service';
import { ProductInfoResolver } from './shared/services/product/product-info.resolver';
import { ActionInfoResolver } from './shared/services/action/action-info.resolver';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'actions', component: ActionsComponent },
  { path: 'actions/:id', component: ActionsInfoComponent, resolve: {
    actionInfo: ActionInfoResolver
  } },
  { path: 'product-category/:category', component: ProductCategoryComponent },
  { path: 'product-category/:category/:id', component: ProductInfoComponent, resolve: {
  productInfo: ProductInfoResolver
}

},
  { path: 'dostavka-ta-oplata', component: DostavkaTaOplataComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'admin', component: AdminComponent,children: [
      { path: 'action', component: ActionComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'product', component: ProductComponent },
      { path: 'order', component: OrdersComponent },
      {path: '', pathMatch: 'full', redirectTo: 'action'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
