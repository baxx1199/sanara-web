import { afterRender, Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { FeaturedComponent } from '../featured/featured.component';
import { NgOptimizedImage } from '@angular/common';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ProfessionalsComponent } from '../professionals/professionals.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { ProductsComponent } from '../products/products.component';
import { ModalDetailsServicesComponent } from '../../../shared/modal-details-services/modal-details-services.component';
import { DetailService } from '../../../shared/services/detail.service';
import { SeccionsService } from '../../../shared/services/seccions.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FeaturedComponent,
    AboutUsComponent,
    ProfessionalsComponent,
    FooterComponent,
    ProductsComponent,
    NgOptimizedImage,
    ModalDetailsServicesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  openDetails: Boolean = false;
  section1!: HTMLElement | null;
  section2!: HTMLElement | null;
  section3!: HTMLElement | null;
  section4!: HTMLElement | null;

  constructor(
    private modalService: DetailService,
    private serviceSeccion: SeccionsService
  ) {
    afterRender(() => {

      const backBtn = document.getElementById('back');
      this.section1 = document.getElementById('featured');
      this.section2 = document.getElementById('aboutUsComponet');
      this.section3 = document.getElementById('services');
      this.section4 = document.getElementById('contactFooter');

      this.serviceSeccion.setDataSeccion1(this.section1);
      this.serviceSeccion.setDataSeccion2(this.section2);
      this.serviceSeccion.setDataSeccion3(this.section3);
      this.serviceSeccion.setDataSeccion4(this.section4);

      backBtn?.addEventListener('click',()=>{
        this.section1?.scrollIntoView({ behavior: 'smooth' });
      })
    });
  }

  ngOnInit() {
    this.modalService.$isOpen.subscribe((res) => {
      console.log(res);
      this.openDetails = res;
    });
  }

  ngAfterViewInit() {}
}
