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
  currentPokemon: Pokemon;
  boxPoke: Pokemon[];

  ngOnInit() {
  }

  onSubmit() {
    this.showing = true;
    this.getTrainerBoxes();
  }

  getTrainerBoxes(){
    this.http.getTrainerBoxes().then((res)=>{
      for(let i = 0; i< res.length; i++ ){
        if(res[i].box === 1){
          this.http.getPokemon(res[i].poke_number.toString()).then((res)=>{
            this.currentPokemon.id = res.id;
            this.currentPokemon.name = res.name;
            this.currentPokemon.types = res.types;
            this.currentPokemon.sprite = res.sprites.front_default;
            this.currentPokemon.stats = res.stats;
          });
        }
      }
    });
  }
}
