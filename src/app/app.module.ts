import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/* import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth"; */

/* import { environment } from 'src/environments/environment'; */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'
import { AuthGuard } from './shared/guard/auth.guard';


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
   /*  AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule */
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
