import {AfterViewInit, Component} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {delay, filter} from 'rxjs/operators';

// Services
import { NotificationService } from './services/notification.service';
import { ModalService } from './services/modal.service';

// Models
import { NotificationType } from './models/notification';
import {ModalInfo} from './models/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'homepage';
  url: string;
  notificationVisible: boolean;
  notificationType: NotificationType;
  modalVisible: boolean = false;
  modalInfo: ModalInfo = new ModalInfo();

  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private modalService: ModalService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      delay(0)
    ).subscribe((event: NavigationEnd) => {
      this.url = event.url;
      this.modalService.closeModal();
      const tree = this.router.parseUrl(this.router.url);
      if (tree.fragment) {
        const element: HTMLElement = document.getElementById(`${tree.fragment}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });

    this.notificationService.notificationType.subscribe((type: NotificationType) => {
      this.notificationType = type;
    });
    this.notificationService.notificationVisible.subscribe((visible: boolean) => {
      this.notificationVisible = visible;
    });

    this.modalService.modalVisible.subscribe((visible: boolean) => {
      this.modalVisible = visible;
    });
    this.modalService.modalInfo.subscribe((modalInfo: ModalInfo) => {
      this.modalInfo = modalInfo;
    });
  }

  ngAfterViewInit(): void {

  }
}
