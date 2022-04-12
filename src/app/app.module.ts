import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { initializeApp } from 'firebase/app';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationService } from './services/notification/notification.service';

initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
