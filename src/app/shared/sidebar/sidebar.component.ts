import { Component } from '@angular/core';
import { GifsService } from '../../gifs/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
/**
 * es una clase de utilizada para mostrar la barra lateral
 */
export class SidebarComponent   {

/**
   * Propiedad Getter que devuelve el historial de búsqueda de GifsService
   * @return {string[]} El historial de búsqueda
   */
 get  historial(){
    return this.GifsService.historial();
  }

  /**
   * @constructor
   * @param {GifsService} GifsService - Una instancia de GifsService
   */
constructor(private GifsService: GifsService){}

/**
   * Método que toma el temino de busqueda y lo envia al método `buscarGifs` de la clase GifsService
   * @param {string} termino - El término de búsqueda
   */
buscar( termino: string){
  console.log(termino)
  this.GifsService.buscarGifs(termino);
    }
}
