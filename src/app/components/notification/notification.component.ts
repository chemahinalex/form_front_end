import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {
  trigger, state, style, animate, transition
} from '@angular/animations';

// Models
import { NotificationType } from '../../models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('expandedPanel', [
      state('closed', style({ right: -50, opacity: 0 })),
      state('opened', style({ right: 50, opacity: 1 })),
      transition('closed <=> opened', animate('.1s'))
    ])
  ]
})
export class NotificationComponent implements OnInit, OnChanges {
  @Input('type') type: NotificationType;
  @Input('visible') visible: boolean;
  state: string = 'initial';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const visible: SimpleChange = changes.visible;
    if (visible.currentValue !== undefined && visible.previousValue !== visible.currentValue) {
      this.state = visible.currentValue ? 'opened' : 'closed';
    }
  }
}
