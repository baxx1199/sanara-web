import { Component } from '@angular/core';
import { Products } from '../products/data/products.data';
import { DetailService } from '../../../shared/services/detail.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  servicesList:any=[]

  constructor(private modalService:DetailService){
      this.servicesList =Products
  }

  openModal(data:any){
      this.modalService.setInfoData(data);
      this.modalService.setDataModal(true);
  }
}
