import { Component } from '@angular/core';
import { TalleresComponent } from '../talleres/talleres.component';
import { ServicesComponent } from '../servicesComp/services.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [TalleresComponent, ServicesComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
