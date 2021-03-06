import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() text = '';
  @Input() type = '';
  @Input() withCloseAction = true;

  constructor() { }

  ngOnInit(): void {
  }

}
