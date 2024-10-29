import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DetailService {
  $isOpen = new EventEmitter<any>();
  isOpen:any =false;

constructor() { }

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

}
