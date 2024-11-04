import { afterRender, Component, HostListener, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { FeaturedComponent } from '../featured/featured.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ProfessionalsComponent } from '../professionals/professionals.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { ProductsComponent } from '../products/products.component';
import { ModalDetailsServicesComponent } from '../../../shared/modal-details-services/modal-details-services.component';
import { DetailService } from '../../../shared/services/detail.service';
import { SeccionsService } from '../../../shared/services/seccions.service';
import { MatIconModule } from '@angular/material/icon';

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
    CommonModule,
    MatIconModule
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
  navbar!: HTMLElement | null;
  isHidden =true;

  
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
      this.navbar = document.getElementById('navbarComp');

      this.serviceSeccion.setDataSeccion1(this.section1);
      this.serviceSeccion.setDataSeccion2(this.section2);
      this.serviceSeccion.setDataSeccion3(this.section3);
      this.serviceSeccion.setDataSeccion4(this.section4);

      backBtn?.addEventListener('click',()=>{
        this.navbar?.scrollIntoView({ behavior: 'smooth' });
      })

   
       

    });
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isHidden = scrollPosition > 100;
  }

  ngOnInit() {
    this.modalService.$isOpen.subscribe((res) => {
      console.log(res);
      this.openDetails = res;
    });
  }

  ngAfterViewInit() {}
}
