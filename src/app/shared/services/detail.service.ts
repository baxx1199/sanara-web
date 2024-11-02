import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  $isOpen = new EventEmitter<any>();
  isOpen: any = false;

  $data = new EventEmitter<any>();
  data: any = '';

  constructor() {}

  setDataModal(statusModal: any): void {
    this.isOpen = statusModal;
    this.$isOpen.emit(statusModal);
  }

  /**
   * Retrieves the data for the modal dialog.
   * @returns The data for the modal dialog
   */
  getDataModal(): Boolean {
    return this.isOpen;
  }

  setInfoData(data: any): void {
    this.data = data;
    this.$data.emit(data);
  }
  getInfoData(): any {
    return this.data;
  }
}
