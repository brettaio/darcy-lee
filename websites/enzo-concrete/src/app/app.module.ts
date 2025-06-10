import { NgModule, provideZonelessChangeDetection } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  EnzoHeaderComponent,
  FooterComponent,
} from '../../../../component/src/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnouncementBarComponent } from '../../../../component/src/lib/announcement-bar/announcement-bar.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EnzoHeaderComponent,
    FooterComponent,
    BrowserAnimationsModule,
    AnnouncementBarComponent,
  ],
  providers: [
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
