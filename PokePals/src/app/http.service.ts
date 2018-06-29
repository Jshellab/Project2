import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './Pokemon';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string ='https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) { }

  getPokemon(url: string): Promise<any>
  {
    return this.http.get(this.url+url).toPromise();
  }
}
