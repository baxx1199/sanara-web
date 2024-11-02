import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeccionsService {

  $section1 = new EventEmitter<any>();
  $section2 = new EventEmitter<any>()
  $section3 = new EventEmitter<any>()
  $section4 = new EventEmitter<any>()

  seccion1:any = null;
  seccion2:any = null;
  seccion3:any = null;
  seccion4:any = null;



  
setDataSeccion1(seccion: any): void {
  this.seccion1 = seccion;
  this.$section1.emit(seccion);   
}
  getDataSeccion1():any{
    return this.seccion1;
  }
  setDataSeccion2(seccion: any): void {
    this.seccion2 = seccion;
    this.$section2.emit(seccion);   
  }
  getDataSeccion2():any{
    return this.seccion2;
  }
  setDataSeccion3(seccion: any): void {
    this.seccion3 = seccion;
    this.$section3.emit(seccion);   
  }
  getDataSeccion3():any{
    return this.seccion3;
  }
  setDataSeccion4(seccion: any): void {
    this.seccion4 = seccion;
    this.$section4.emit(seccion);   
  }
  getDataSeccion4():any{
    return this.seccion4;
  }
}
