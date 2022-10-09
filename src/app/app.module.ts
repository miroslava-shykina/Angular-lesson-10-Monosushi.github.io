import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { ActionComponent } from './admin/action/action.component';
import { ActionsInfoComponent } from './pages/actions-info/actions-info.component';
import { ProductCategoryComponent } from './pages/product-category/product-category.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { DostavkaTaOplataComponent } from './pages/dostavka-ta-oplata/dostavka-ta-oplata.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './admin/category/category.component';
import { ProductComponent } from './admin/product/product.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ActionsComponent,
    ActionComponent,
    ActionsInfoComponent,
    ProductCategoryComponent,
    ProductInfoComponent,
    DostavkaTaOplataComponent,
    AboutUsComponent,
    AdminComponent,
    CategoryComponent,
    ProductComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
