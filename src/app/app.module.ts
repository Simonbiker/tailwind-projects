import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailSubComponent } from './components/email-sub/email-sub.component';
import { PricingCardsComponent } from './components/pricing-cards/pricing-cards.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { ImageGallryComponent } from './components/image-gallry/image-gallry.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailSubComponent,
    PricingCardsComponent,
    NavComponent,
    NotFoundComponent,
    ProductModalComponent,
    ImageGallryComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
