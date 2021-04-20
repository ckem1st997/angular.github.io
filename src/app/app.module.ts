import { AdminHeaderComponent } from './Layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './Layout/admin-footer/admin-footer.component';
import { LayoutComponent } from './Layout/layout/layout.component';
import { LayoutAdminComponent } from './Layout/layout-admin/layout-admin.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CollapseModule, MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartAccountComponent } from './Layout/Header/FooterHeader/cart-account/cart-account.component';
import { MenuDesktopComponent } from './Layout/Header/FooterHeader/menu-desktop/menu-desktop.component';
import { MenuMobileComponent } from './Layout/Header/FooterHeader/menu-mobile/menu-mobile.component';
import { SearchMobileComponent } from './Layout/Header/search-mobile/search-mobile.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ArryProductComponent } from './arry-product/arry-product.component';
// Forms Module - for ngModel
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NpnSliderModule } from 'npn-slider';
import { DetailsProductComponent } from './details-product/details-product.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { HeaderComponent } from './Layout/Header/header.component';
import { KkkComponent } from './kkk/kkk.component';
import { LoginIndexComponent } from './login-index/login-index.component';
import { ProductCategoryComponent } from './admin/ProductCategory/ProductCategory.component';
import { CreatePCComponent } from './admin/ProductCategory/CreatePC/CreatePC.component';
import { HttpClientModule } from '@angular/common/http';

import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';
import { ArticleComponent } from './Article/Article.component';
import { ListArticleComponent } from './List-Article/List-Article.component';

@NgModule({
  declarations: [		
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    MenuDesktopComponent,
    MenuMobileComponent,
    CartAccountComponent,
    SearchMobileComponent,
    ListProductsComponent,
    FooterComponent,
    ArryProductComponent,
    DetailsProductComponent,
    CartComponent,
    AdminComponent,
    LayoutAdminComponent,
    LayoutComponent,
    AdminFooterComponent,
    AdminHeaderComponent,
    LoginComponent,
    KkkComponent,
    LoginIndexComponent,
    ProductCategoryComponent,
    CreatePCComponent,
      ArticleComponent,
      ListArticleComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NpnSliderModule,
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'imageshared'}),
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
