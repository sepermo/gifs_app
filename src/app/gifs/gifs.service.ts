import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifdResponse, Gif } from './interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})

/**
 * Esta clase se llama GifsService y se usa para buscar gifs usando la API de Giphy.
 */

export class GifsService {

   /**
   * llave para acceder a la informacion de la api
   * @type {string}
   * @private
   */
  private apiKey: string = 'FgMH6ZbnQR2NMSszhguEx6SIVaPpdFF3';
  
     /**
   * es la url de Giphy api
   * @type {string}
   * @private
   */
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';

     /**
   * arreglo que almacena el historial de busqueda del sidebar
   * @type {string[]}
   * @private
   */
  private _historial:string[] =[];

     /**
   * arreglo para almacenar resultados de búsqueda los cuales agrega en el sidebar
   * @type {string[]}
   * @private
   */
  public resultados: Gif[]=[];

  /**
   * hace una copia del arreglo _historial
   * @return {string[]} devuelve los elementos almacenados en el arreglo _historial
   * @public
   */
   historial() : string[]{
    return [...this._historial]
  }


  /**
   * @constructor
   * @param {HttpClient} http - me permite utilizar todos los metodos contenidas en la instancia httpclient
   */
  constructor(private http: HttpClient){
    if(localStorage.getItem('historial')){
      //inicializan las variables a los elementos almacenados en el local storage
      this._historial= JSON.parse(localStorage.getItem('historial')!) || [];
      this.resultados= JSON.parse(localStorage.getItem('resultados')!) || [];
    }
  }

  /**
   * busca gifs utilizando la api de giphy
   * @param {string} query - 
   */
   buscarGifs(query:string){
    query = query.trim().toLocaleLowerCase();
    
//validacion para ver si el elemento ya ha sido buscado antes
    if(!this._historial.includes(query)){
      //añade la consulta al historial de busqueda
      this._historial.unshift(query);
      //limita al historia a mostrar un maximo de 10 elementos
      this._historial = this._historial.splice(0,10);

      //guarda el historian en el local storage
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
//parametros para usar la api de giphy
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query);

    //apunta a la informacion almacenada en la url de la api de giphy
    this.http.get<SearchGifdResponse>(`${this.servicioUrl}/search`, {params: params})

  
    .subscribe((resp) => {
      //muestra en consola la informacion de la data
      console.log(resp);
      //asigna a la posicion actual del arreglo resultado la informacion de la data
      this.resultados = resp.data;
      //asigna a local storage la informacion de resultado
      localStorage.setItem('resultados', JSON.stringify(this.resultados));
    })


  }
}