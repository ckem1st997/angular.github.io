import { InfoUserComponent } from './info-user/info-user.component';
import { ArticleComponent } from './Article/Article.component';

import { LoginIndexComponent } from './login-index/login-index.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Layout/layout/layout.component';

import { AuthGuard } from './admin/_helpers';
import { CartComponent } from './cart/cart.component';
import { ListArticleComponent } from './List-Article/List-Article.component';
import { DangkyComponent } from './dangky/dangky.component';


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
      { path: 'userinfo', component: InfoUserComponent, canActivate: [AuthGuard] },//canActivate: [AuthGuard]
      { path: 'home/login', component: LoginIndexComponent },
      { path: 'dangky', component: DangkyComponent }
    ]
  },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
