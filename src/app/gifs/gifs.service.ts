import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = 'FgMH6ZbnQR2NMSszhguEx6SIVaPpdFF3';
  private _historial:string[] =[];

  get historial(){
    return [...this._historial]
  }

  buscarGifs(query:string){
    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
    }
    this._historial = this._historial.splice(0,10);

    fetch('api.giphy.com/v1/gifs/search?api_key=FgMH6ZbnQR2NMSszhguEx6SIVaPpdFF3&q=dragon ball z&limit=10')
    .then(resp =>{
      resp.json().then(data => console.log(data))
    })

    console.log(this._historial);
  }
}
