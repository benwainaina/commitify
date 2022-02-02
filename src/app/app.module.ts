import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app.routing.module';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding/onboarding.component';


@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    /**
     * app routing module
     */
     AppRoutingModule,

    /**
     * NGRX modules configuration for root
     */
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
