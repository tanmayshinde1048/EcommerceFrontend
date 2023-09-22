import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddTagToProductComponent } from './admin/add-tag-to-product/add-tag-to-product.component';
import { AddTagComponent } from './admin/add-tag/add-tag.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayCategoryComponent } from './display-category/display-category.component';
import { DisplayTagComponent } from './display-tag/display-tag.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { ShoppingCartComponent } from './ecommerce/shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { CommonModule, DatePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { SangleProductComponent } from './ecommerce/sangle-product/sangle-product.component';
import { MatMenuModule } from '@angular/material/menu';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    AddProductComponent,
    AddTagToProductComponent,
    AddTagComponent,
    CategoriesComponent,
    DashboardComponent,
    DisplayCategoryComponent,
    DisplayTagComponent,
    EcommerceComponent,
    OrdersComponent,
    ProductsComponent,
    SangleProductComponent,
    ShoppingCartComponent,
    LoginComponent,
    ProfileComponent,
    UpdateProfileComponent,
    AddTagComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatCardModule,
    MatChipsModule,
    MatExpansionModule,
    CommonModule,
    FormsModule,
    MatMenuModule,
    DragDropModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
