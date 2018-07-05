import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../Pokemon';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.css']
})
export class CatchComponent implements OnInit {
  url: string ;
  caughtPoke: Pokemon = {
    id: 0,
    name: 'Nothing',
    sprite: '../../assets/unown-interrogation.gif',
    stats: [],
    types: [],
    pokemonId: 0
  };
  constructor(private http: HttpService) { }

  ngOnInit() {
  }
  catchPoke() {
    const chance = Math.round(Math.random());
    const poke = Math.floor((Math.random() * 802) + 1);
    if (chance === 0) {
      this.caughtPoke.sprite = '../../assets/unown-interrogation.gif';
      // this.caughtPoke.id = 0;
      document.getElementById('alert').innerHTML = 'Nothing was caught...Try again?';
      document.getElementById('goodalert').innerHTML = '';
    } else {
      this.url = poke.toString();
      document.getElementById('alert').innerHTML = 'Something Happened?!';
      this.http.getPokemon(this.url).then((res) => {
        this.caughtPoke.id = res.id;
        this.caughtPoke.sprite = res.sprites.front_default;
        this.caughtPoke.name = res.name;
        document.getElementById('goodalert').innerHTML = 'You caught something! ' + this.caughtPoke.name + ' added to your box!';

      });
    }
  }
}
