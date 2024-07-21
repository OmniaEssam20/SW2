import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SlideAreaComponent } from './slide-area/slide-area.component';
import { SmallBanerComponent } from './small-baner/small-baner.component';
import { RouterModule } from '@angular/router';
import { ProductAreaComponent } from './product-area/product-area.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlideAreaComponent,
    SmallBanerComponent,
    ProductAreaComponent,
    ContactUsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]) ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
