import { NgModule, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideExperimentalZonelessChangeDetection(), provideClientHydration(withEventReplay())],
  bootstrap: [AppComponent]
})
export class AppModule { }
