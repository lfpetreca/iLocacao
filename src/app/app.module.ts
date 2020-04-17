import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/* import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth"; */

/* import { environment } from 'src/environments/environment'; */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'
import { AuthGuard } from './shared/guard/auth.guard';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule,
    LanguageTranslationModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule,
    NgbModule,
    /*  AngularFireModule.initializeApp(environment.firebase),
     AngularFireAuthModule */
  ],
  providers: [
    AuthGuard,
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
