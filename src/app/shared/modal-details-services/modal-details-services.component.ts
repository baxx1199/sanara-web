import { Component } from '@angular/core';
import { DetailService } from '../services/detail.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-modal-details-services',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './modal-details-services.component.html',
  styleUrl: './modal-details-services.component.scss'
})
export class ModalDetailsServicesComponent {
  productInfo:any = '';
  constructor(private detailServices:DetailService){

  }
  ngOnInit(){
    this.productInfo =this.detailServices.getInfoData()
  }

  

  closeModal(){
    this.detailServices.setDataModal(false)
    this.detailServices.setInfoData(null)
  }
}
