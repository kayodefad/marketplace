import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/home/products/products.component';
import { BottomNavComponent } from './components/home/bottom-nav/bottom-nav.component';
import { ImgGalleryComponent } from './components/buy/img-gallery/img-gallery.component';
import { BuyComponent } from './components/buy/buy.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ProductsComponent, BottomNavComponent, ImgGalleryComponent, BuyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
