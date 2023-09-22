import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DisplayCategoryComponent } from './display-category/display-category.component';
import { DisplayTagComponent } from './display-tag/display-tag.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { CommonModule } from '@angular/common';
import { SangleProductComponent } from './ecommerce/sangle-product/sangle-product.component';
import { AddTagComponent } from './admin/add-tag/add-tag.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'sangle/product/:idProduct',
    component: SangleProductComponent
  },
  {
    path: 'buy/product/:name',
    component: SangleProductComponent
  },
  {
    path: 'dsiplay-category/:idCategory',
    component: DisplayCategoryComponent
  },
  {
    path: 'display-tag/:idTag',
    component: DisplayTagComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    children: [
      {
        path: 'categories/:idCategory',
        component: CategoriesComponent
      },
      {
        path:'tag/:idTag',
        component:AddTagComponent
      }
    ]
  }
];



@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
