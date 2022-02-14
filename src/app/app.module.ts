import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from "@angular/common";
import localeSe from "@angular/common/locales/se";

import { AppComponent } from './app.component';
import { LoanFormComponent } from './loan-form/loan-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'se-SE' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeSe, "se");
