import { Component } from '@angular/core';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})

/**
 * clase para mostrar los resultados de busqueda
 */
export class ResultadosComponent   {
  
  
/**
   * Propiedad Getter que devuelve los resultados de búsqueda de GifsService
   * @return {Gif[]} Los resultados de búsqueda
   */
  get resultados(){
    return this.GifsService.resultados;
  }
  
/**
   * @constructor
   * @param {GifsService} GifsService - Una instancia de GifsService
   */
constructor(private GifsService: GifsService){

}
 
}
