import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent  {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef;

  constructor(private GifsService: GifsService){

  }

  buscar( ){
    const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length === 0){
      return;
    }
    this.GifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
