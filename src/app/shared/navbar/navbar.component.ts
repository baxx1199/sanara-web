import {
  afterNextRender,
  afterRender,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { SeccionsService } from '../services/seccions.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @ViewChild('homeLink') homeLink!: ElementRef;
  @ViewChild('aboutLink') aboutLink!: ElementRef;
  @ViewChild('servicesLink') servicesLink!: ElementRef;
  @ViewChild('appLink') appLink!: ElementRef;
  @ViewChild('contactLink') contactLink!: ElementRef;

  section1!: HTMLElement | null;
  section2!: HTMLElement | null;
  section3!: HTMLElement | null;
  section4!: HTMLElement | null;

  constructor(private serviceSeccion: SeccionsService) {
    
    afterRender(() => {
      const scrollToSection1Button = document.getElementById('home');
      const scrollToSection2Button = document.getElementById('aboutUs');
      const scrollToSection3Button = document.getElementById('products');
      const scrollToSection4Button = document.getElementById('contact');

      this.serviceSeccion.$section1.subscribe((res) => {//home
        this.section1 = res;
      });
      this.serviceSeccion.$section2.subscribe((res) => {//about us
        this.section2 = res;
      });
      this.serviceSeccion.$section3.subscribe((res) => {//services
        this.section3 = res;
      });
      this.serviceSeccion.$section4.subscribe((res) => { //contact
        this.section4 = res;
      });

      // Agrega eventos de click a los botones
      scrollToSection1Button?.addEventListener('click', () => {
        this.section1?.scrollIntoView({ behavior: 'smooth' });
      });

      scrollToSection2Button?.addEventListener('click', () => {
        this.section2?.scrollIntoView({ behavior: 'smooth' });
      });

      scrollToSection3Button?.addEventListener('click', () => {
        this.section3?.scrollIntoView({ behavior: 'smooth' });
      });

      scrollToSection4Button?.addEventListener('click', () => {
        this.section4?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  ngOnInit() {
    
  }
}
