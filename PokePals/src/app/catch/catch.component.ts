import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../Pokemon';
import {HttpService} from '../http.service';
import { CaughtP} from '../CaughtP';
import {Trainer} from '../Trainer';

@Component({
  selector: 'app-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.css']
})
export class CatchComponent implements OnInit {
  url: string;
  caught: Pokemon = {
    id: 0,
    name: 'Nothing',
    sprite: '../../assets/unown-interrogation.gif',
    stats: [],
    types: [],
    pokemonId: 0
  };
  caughPoke: CaughtP = {
    box: 1,
    poke_number: 0,
    trainer: {
      trainer_Id: 0
    }
};
  constructor(private http: HttpService) { }

  ngOnInit() {
  }
  catchPoke() {
    const chance = Math.round(Math.random());
    const poke = Math.floor((Math.random() * 802) + 1);
    if (chance === 0) {
      this.caught.sprite = '../../assets/unown-interrogation.gif';
      // this.caughtPoke.id = 0;
      document.getElementById('alert').innerHTML = 'Nothing was caught...Try again?';
      document.getElementById('goodalert').innerHTML = '';
    } else {
      this.url = poke.toString();
      document.getElementById('alert').innerHTML = 'Something Happened?!';
      this.http.getPokemon(this.url).then((res) => {
        this.caught.id = res.id;
        this.caught.sprite = res.sprites.front_default;
        this.caught.name = res.name;
        document.getElementById('goodalert').innerHTML = 'You caught something! ' + this.caught.name + ' added to your box!';
        this.caughPoke.poke_number = res.id;
        this.caughPoke.trainer = this.http.trainer;
        console.log(this.caughPoke);
        var json = JSON.parse(JSON.stringify(this.caughPoke));
        console.log(json);
        this.http.addPokemon(json);
      });
    }
  }
}
