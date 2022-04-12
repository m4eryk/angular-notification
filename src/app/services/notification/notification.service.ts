import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { getMessaging, getToken, onMessage, NotificationPayload } from 'firebase/messaging';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  message?: NotificationPayload;

  requestPermission() {
    const messaging = getMessaging();

    if (!environment.production) {
      getToken(messaging, {vapidKey: environment.firebase.vapidKey}).then((currentToken) => {
        if (currentToken) {
          console.log('test token', currentToken);
        }
      });
    }
  }

  listen() {
    const messaging = getMessaging();

    onMessage(messaging, ({notification}) => {
      this.message = notification;
    });
  }
}
