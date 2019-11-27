import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

// Services
import { ModalService } from '../../services/modal.service';

// Models
import {ModalInfo} from '../../models/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('expandedPanel', [
      state('closed', style({ top: '-100%' })),
      state('opened', style({ top: 0 })),
      transition('closed <=> opened', animate('.1s'))
    ])
  ]
})
export class ModalComponent implements OnInit, OnChanges {
  @Input('visible') visible: boolean;
  @Input('modalInfo') modalInfo: ModalInfo;
  state: string = 'initial';
  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const visible: SimpleChange = changes.visible;
    if (visible && visible.previousValue !== visible.currentValue) {
      this.state = visible.currentValue ? 'opened' : 'closed';
    }
  }

  close() {
    this.modalService.closeModal();
  }

}
