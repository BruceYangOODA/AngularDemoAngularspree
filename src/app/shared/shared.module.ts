import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MaterialModule } from './material/material.module';
import { FooterContactInfoComponent } from './components/footer/components/footer-contact-info/footer-contact-info.component';
import { FooterQuickLinksComponent } from './components/footer/components/footer-quick-links/footer-quick-links.component';
import { FooterSocialLinksComponent } from './components/footer/components/footer-social-links/footer-social-links.component';
import { BrandMenuDropdownComponent } from './components/header/components/brand-menu-dropdown/brand-menu-dropdown.component';
import { CategoriesMenuDropdownComponent } from './components/header/components/categories-menu-dropdown/categories-menu-dropdown.component';
import { CategoryMobileMenuComponent } from './components/header/components/category-mobile-menu/category-mobile-menu.component';
import { HeaderCartComponent } from './components/header/components/header-cart/header-cart.component';
import { HeaderHelpDropdownComponent } from './components/header/components/header-help-dropdown/header-help-dropdown.component';
import { HeaderSearchComponent } from './components/header/components/header-search/header-search.component';
import { ProfileDropdownComponent } from './components/header/components/profile-dropdown/profile-dropdown.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HttpClientModule ,HttpClient } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CategoriesDetailsComponent } from './components/header/components/categories-menu-dropdown/components/categories-details/categories-details.component';
import { BrandLogoComponent } from './components/header/components/categories-menu-dropdown/components/brand-logo/brand-logo.component';
import { CategoriesListComponent } from './components/header/components/categories-menu-dropdown/components/categories-list/categories-list.component';
import { HomeComponent } from './components/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LanguageMenuDropdownComponent } from './components/header/components/language-menu-dropdown/language-menu-dropdown.component';
import { LpBannerComponent } from './components/home/components/lp-banner/lp-banner.component';

import { NguCarouselModule } from '@ngu/carousel';
import { LpProductListComponent } from './components/home/components/lp-product-list/lp-product-list.component';   

export function HttpLoaderFactory(http: HttpClient) {       
  return new TranslateHttpLoader(http, '../../assets/i18n/', '.json')     
  }      


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FooterContactInfoComponent,
    FooterQuickLinksComponent,
    FooterSocialLinksComponent,
    BrandMenuDropdownComponent,
    CategoriesMenuDropdownComponent,
    CategoryMobileMenuComponent,
    HeaderCartComponent,
    HeaderHelpDropdownComponent,
    HeaderSearchComponent,
    ProfileDropdownComponent,
    CategoriesDetailsComponent,
    BrandLogoComponent,
    CategoriesListComponent,
    HomeComponent,
    SearchBarComponent,
    LanguageMenuDropdownComponent,
    LpBannerComponent,
    LpProductListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ModalModule.forRoot(),
    HttpClientModule,
    NguCarouselModule,
    MaterialModule,    
    TranslateModule.forRoot({
      defaultLanguage: 'cn',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
