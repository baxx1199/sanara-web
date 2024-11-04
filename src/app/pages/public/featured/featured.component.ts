import { Component } from '@angular/core';
import { DetailService } from '../../../shared/services/detail.service';
import { Features, Products } from '../products/data/products.data';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss'
})
export class FeaturedComponent {

  featureData:any = '';
  constructor(private modalService:DetailService) {
    this.featureData = Features.feature;
   }
  openModal(){
    this.modalService.setInfoData(this.featureData);
    this.modalService.setDataModal(true)
  }
}
