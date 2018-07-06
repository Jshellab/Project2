import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainer } from './Trainer';
import { Pokemon } from './Pokemon';
import {SubmitPost} from './SubmitPost';
import { PokeBox } from './PokeBox';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = 'https://pokeapi.co/api/v2/pokemon/';
  url2: string = 'http://pokemon.us-east-2.elasticbeanstalk.com/trainers';
  url4: string = 'http://pokemon.us-east-2.elasticbeanstalk.com/pokemon';
  url3: string = 'http://pokemon.us-east-2.elasticbeanstalk.com/posts';
  user: string;
  trainer: Trainer;
  pokemon: Pokemon;
  submissionP: SubmitPost;

  constructor(private http: HttpClient) {
  }

  getPokemon(url: string): Promise<any> {
    url = url.toLowerCase();
    return this.http.get(this.url + url).toPromise();
  }

  getTrainers(): Promise<any> {
    return this.http.get(this.url2).toPromise();
  }

  getTrainer(name: string): Promise<any> {
    return this.http.get(this.url2 +"/"+name).toPromise();
  }

  createUser(trainer: Trainer): Promise<any> {
    return this.http.post(this.url2, trainer).toPromise();
  }

  deleteUser(url: string): Promise<any> {
    return this.http.delete(this.url2 + '/delete/' + this.trainer.trainer_Id).toPromise();
  }

  getTrainerPoke(): Promise<any> {
    return this.http.get(this.url4 + '/' + this.trainer.username).toPromise();
  }

  getOtherTrainerPoke(name: string): Promise<any>{
    return this.http.get(this.url4+"/"+name).toPromise();
  }

  getUserPost(): Promise<any> {
    return this.http.get(this.url3 + '/' + this.user).toPromise();
  }

  addUserPost(submissionP: SubmitPost): Promise<any> {
    return this.http.post(this.url3, submissionP).toPromise();
  }

  getPost(): Promise<any> {
    return this.http.get(this.url3).toPromise();
  }

  addPokemon(pokemon: Pokemon): Promise<any> {
    return this.http.post(this.url4, pokemon).toPromise();
  }
  movePokemonToParty(pokeBox: PokeBox): Promise<any>{
    return this.http.post(this.url4, pokeBox).toPromise();
  }

  movePokemonToBox(partyPoke: PokeBox): Promise<any> {
    return this.http.post(this.url4, partyPoke).toPromise();
  }

  releasePokemon(pokemonToRelease: PokeBox): Promise<any>{
    return this.http.delete(this.url4+"/delete/"+pokemonToRelease.pokemon_Id).toPromise();
  }

  tradePokemon(currentPokemon: PokeBox): Promise<any>{
    return this.http.patch(this.url4, JSON.parse(JSON.stringify(currentPokemon))).toPromise();
  }

  getPokemonById(user: string, id: number): Promise<any>{
    return this.http.get(this.url4+"/"+user+"/"+id).toPromise();
  }

  deletePostById(id: number): Promise<any>{
    return this.http.delete(this.url3+"/delete/"+id).toPromise();
  }
}
