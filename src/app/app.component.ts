import { Component, OnInit } from '@angular/core';
import { NotificationService } from './services/notification/notification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'af-notification';
  message: any;

  constructor(private notification: NotificationService) {
    this.message = this.notification.message;
  }

  ngOnInit() {
    this.notification.requestPermission();
    this.notification.listen();
  }
}
