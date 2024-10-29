import { Component } from '@angular/core';
import { DetailService } from '../../../shared/services/detail.service';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss'
})
export class FeaturedComponent {
  constructor(private modalService:DetailService) { }
  openModal(){
    this.modalService.setDataModal(true)
  }
}
