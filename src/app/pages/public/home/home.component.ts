import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { FeaturedComponent } from '../featured/featured.component';
import { NgOptimizedImage } from '@angular/common';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ProfessionalsComponent } from '../professionals/professionals.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { ProductsComponent } from '../products/products.component';
import { ModalDetailsServicesComponent } from '../../../shared/modal-details-services/modal-details-services.component';
import { DetailService } from '../../../shared/services/detail.service';

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[NavbarComponent, FeaturedComponent,AboutUsComponent,ProfessionalsComponent,FooterComponent,ProductsComponent,NgOptimizedImage, ModalDetailsServicesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  openDetails:Boolean= false;

  constructor(private modalService:DetailService) { }

  ngOnInit() {
    this.modalService.$isOpen.subscribe(res=>{
      console.log(res)
      this.openDetails=res
    })
  }

}
