import { ArticleComponent } from './Article/Article.component';

import { LoginIndexComponent } from './login-index/login-index.component';
import { LayoutAdminComponent } from './Layout/layout-admin/layout-admin.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Layout/layout/layout.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { AuthGuard } from './admin/_helpers';
import { KkkComponent } from './kkk/kkk.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuardAdmin } from './admin/_helpers/auth.guard_admin';
import { ProductCategoryComponent } from './admin/ProductCategory/ProductCategory.component';
import { CreatePCComponent } from './admin/ProductCategory/CreatePC/CreatePC.component';
import { ListArticleComponent } from './List-Article/List-Article.component';


const routes: Routes = [//Site routes goes here 
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      { path: 'listproduct/:id/:name', component: ListProductsComponent },
      { path: 'products/:id/:slug', component: DetailsProductComponent },
      { path: 'listarticle', component: ListArticleComponent },
      { path: 'article/:id/:name', component: ArticleComponent },
      { path: 'cart', component: CartComponent },
      { path: 'kkk', component: KkkComponent, canActivate: [AuthGuard] },
      { path: 'home/login', component: LoginIndexComponent }
    ]
  },

  // App routes goes here here
  {
    path: 'cms',
    component: LayoutAdminComponent, canActivate: [AuthGuardAdmin],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'index' },
      { path: 'index', component: AdminComponent, canActivate: [AuthGuardAdmin] },
      { path: 'productcategory', component: ProductCategoryComponent, canActivate: [AuthGuardAdmin] },
      { path: 'productcategory/create', component: CreatePCComponent, canActivate: [AuthGuardAdmin] },
    ]
  },

  //no layout routes
  { path: 'login', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
