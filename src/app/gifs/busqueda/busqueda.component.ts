import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})

/**
 * clase que permite buscar los gifs usando GifsService
 */
export class BusquedaComponent  {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef;

  /**
   * Inyectando el GifsService para poder usarlo en el componente
   */
  constructor(private GifsService: GifsService){

  }

/**
   * Buscar GIF con el término de búsqueda ingresado
   */
  buscar( ){
    
// Obtener el valor del elemento de entrada de búsqueda
    const valor = this.txtBuscar.nativeElement.value;

    
// validar si el valor está vacío
    if(valor.trim().length === 0){
      return;
    }

    // Llamar al método 'buscarGifs()' y le entrega el elemento valor
    this.GifsService.buscarGifs(valor);
    
// Borrar el elemento de la caja de texto
    this.txtBuscar.nativeElement.value = '';
  }
}
