
import { LayoutComponent } from './Layout/layout/layout.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

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
import { HeaderComponent } from './Layout/Header/header.component';
import { LoginIndexComponent } from './login-index/login-index.component';
import { ProductCategoryComponent } from './admin/ProductCategory/ProductCategory.component';
import { CreatePCComponent } from './admin/ProductCategory/CreatePC/CreatePC.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';
import { ArticleComponent } from './Article/Article.component';
import { ListArticleComponent } from './List-Article/List-Article.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { NgxLoadingModule } from 'ngx-loading';
import { LoaderService } from './service/loader.service';
import { LoaderInterceptorService } from './service/loader-interceptor.service';
import { LoadsnipComponent } from './loadsnip/loadsnip.component';
import { InfoUserComponent } from './info-user/info-user.component';
import { DangkyComponent } from './dangky/dangky.component';


const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'middle',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 3000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
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
    LayoutComponent,
    LoginIndexComponent,
    ProductCategoryComponent,
    CreatePCComponent,
    ArticleComponent,
    ListArticleComponent,
    LoadsnipComponent,
    InfoUserComponent,
      DangkyComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
    NpnSliderModule,
    NotifierModule.withConfig(customNotifierOptions),
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'imageshared' }),
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
