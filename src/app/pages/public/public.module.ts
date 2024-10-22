import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { FeaturedComponent } from './featured/featured.component';
import { ProfessionalsComponent } from './professionals/professionals.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeComponent,
    FeaturedComponent,
    ProfessionalsComponent
  ],
  declarations: []
})
export class PublicModule { }
