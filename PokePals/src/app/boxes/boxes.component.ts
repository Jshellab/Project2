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
  currentPokemon: Pokemon[];
  boxPoke:[any];

  ngOnInit() {
  }

  onSubmit() {
    this.showing = true;
    this.getTrainerBoxes();
  }

  getTrainerBoxes(){
    this.http.getTrainerBoxes().then((res)=>{
      this.currentPokemon = res;
      for(let i = 0; i<this.currentPokemon.length; i++ ){
        this.http.getPokemon(this.currentPokemon[i].id.toString()).then((res)=>{
          this.boxPoke += res;
        });
      }
    });
  }
}
