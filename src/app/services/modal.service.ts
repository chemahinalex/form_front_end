import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';

// Models
import { ModalInfo } from '../models/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public modalVisible: Subject<boolean> = new Subject<boolean>();
  public modalInfo: Subject<ModalInfo> = new Subject<ModalInfo>();
  constructor() { }

  showModal(modalInfo: ModalInfo) {
    this.modalVisible.next(true);
    this.modalInfo.next(modalInfo);
  }

  closeModal() {
    this.modalVisible.next(false);
    this.modalInfo.next(new ModalInfo());
  }
}
