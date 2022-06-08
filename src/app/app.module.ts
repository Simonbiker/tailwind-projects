import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailSubComponent } from './components/email-sub/email-sub.component';
import { PricingCardsComponent } from './components/pricing-cards/pricing-cards.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductModalComponent } from './components/product-modal/product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailSubComponent,
    PricingCardsComponent,
    NavComponent,
    NotFoundComponent,
    ProductModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
