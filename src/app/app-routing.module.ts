import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmailSubComponent } from './components/email-sub/email-sub.component';
import { PricingCardsComponent } from './components/pricing-cards/pricing-cards.component';

const routes: Routes = [
  // Need to create a home component but Nav will do for the moment. 
  { path: '', component: NavComponent, pathMatch: 'full' },
  { path: 'emailSubComponent', component: EmailSubComponent },
  { path: 'pricingCardsComponent', component: PricingCardsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
