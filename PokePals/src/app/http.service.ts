import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './Pokemon';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = 'https://pokeapi.co/api/v2/pokemon/';
  url2: string = 'http://pokemon.us-east-2.elasticbeanstalk.com/trainers';
  constructor(private http: HttpClient) { }

  getPokemon(url: string): Promise<any> {
    url = url.toLowerCase();
    return this.http.get(this.url+url).toPromise();
  }

  getTrainers(): Promise<any>{
    return this.http.get(this.url2).toPromise();
  }
}
