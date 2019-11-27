import {EventEmitter, Injectable} from '@angular/core';

// Models
import {NotificationType} from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public notificationVisible: EventEmitter<boolean> = new EventEmitter<boolean>();
  public notificationType: EventEmitter<NotificationType> = new EventEmitter<NotificationType>();

  private interval;
  private timeout: number = 2000;
  constructor() { }

  showNotification(notificationType: NotificationType) {
    this.notificationType.next(notificationType);
    this.notificationVisible.next(true);
    if (this.interval) clearInterval(this.interval);

    this.interval = setTimeout(() => {
      this.notificationVisible.next(false);
    }, this.timeout);
  }
}
