import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { FeaturedComponent } from '../featured/featured.component';
import { NgOptimizedImage } from '@angular/common';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ProfessionalsComponent } from '../professionals/professionals.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[NavbarComponent, FeaturedComponent,AboutUsComponent,ProfessionalsComponent,FooterComponent,ProductsComponent,NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
