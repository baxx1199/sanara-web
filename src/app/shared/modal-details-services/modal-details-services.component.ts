import { Component } from '@angular/core';
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'app-modal-details-services',
  standalone: true,
  imports: [],
  templateUrl: './modal-details-services.component.html',
  styleUrl: './modal-details-services.component.scss'
})
export class ModalDetailsServicesComponent {
  constructor(private detailServices:DetailService){

  }

  productInfo:any = '';
  

  closeModal(){
      this.detailServices.setDataModal(false)
  }
}
