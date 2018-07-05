import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Pokemon } from '../Pokemon';
import { Trainer } from '../Trainer';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

  constructor(private http: HttpService) { }

  showing: boolean = false;
  boxPoke: Array<Pokemon> = [];
  ngOnInit() {
  }

  onSubmit() {
    this.showing = true;
    this.getTrainerBoxes();
  }

  getTrainerBoxes() {
    this.http.getTrainerBoxes().then((res) => {
      for (let i = 0; i < res.length; i++ ) {
          if (res[i].box === 0) {
            this.getPokemon(res[i].poke_number.toString());
          }
        }
    });
  }

  getPokemon(url: string){
    this.http.getPokemon(url).then((res) => {
      var currentPokemon: Pokemon = {
        id: res.id,
        name: res.name,
        sprite: res.sprites.front_default,
        types: res.types,
        stats: res.stats
      };
      this.boxPoke.push(currentPokemon);
    });
  }
}
