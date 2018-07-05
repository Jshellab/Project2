import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Pokemon } from '../Pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  showing: boolean;
  url: '';
  currentPoke: Pokemon = {
    id: 0,
    name: '',
    sprite: '',
    stats: [],
    types: [],
    pokemonId: 0
  };
  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.getPokemon();
  }

  getPokemon() {
    this.http.getPokemon(this.url).then((res) => {
        this.currentPoke.id = res.id;
        this.currentPoke.name = res.name;
        this.currentPoke.types = res.types;
        this.currentPoke.sprite = res.sprites.front_default;
        this.currentPoke.stats = res.stats;
        this.currentPoke.types = res.types;
        this.showing = true;
      }
    );
  }
}
