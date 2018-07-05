import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Pokemon } from '../Pokemon';
import { Trainer } from '../Trainer';
import { PokeBox } from '../PokeBox';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

  constructor(private http: HttpService) { }

  showBox: boolean = false;
  showParty: boolean = false;
  boxPoke: Array<Pokemon> = [];
  pokeBox: Array<PokeBox> =[];
  pokeInParty: number = 0;
  partyPoke: Array<PokeBox> = [];
  party: Array<Pokemon> = [];

  ngOnInit() {
    this.getTrainerBoxes();
    this.getParty();
  }

  viewBox() {
    this.showParty = false;
    this.showBox = true;
  }

  viewParty(){
    this.showBox = false;
    this.showParty = true;
  }
  
  getTrainerBoxes(){
    this.http.getTrainerPoke().then((res)=>{
      for(let i = 0; i< res.length; i++ ){
          if(res[i].box === 1){
            this.getPokemon(res[i].poke_number.toString(),res[i].pokemon_Id);
            let currentPokeBox: PokeBox={
              nickname: "",
              box: 0,
              poke_number: res[i].poke_number,
              trainer: res[i].trainer,
              pokemon_Id: res[i].pokemon_Id
            }
            this.pokeBox.push(currentPokeBox);
          }
          else{
            this.pokeInParty++;
          }
        }
    });
  }

  getPokemon(url: string, pokemonId: number){
    this.http.getPokemon(url).then((res)=>{
      let currentPokemon: Pokemon={
        id: res.id,
        name: res.name,
        sprite: res.sprites.front_default,
        types: res.types,
        stats: res.stats,
        pokemonId: pokemonId
      };
      this.boxPoke.push(currentPokemon);
    });
  }

  moveToParty(pokemonId: number){
    if(this.pokeInParty < 6){
      for(let poke of this.pokeBox){
        if(pokemonId === poke.pokemon_Id){
          this.http.movePokemonToParty(JSON.parse(JSON.stringify(poke)));
          this.pokeInParty++;
        }
      }
    }
    else{
      document.getElementById("moveToParty").setAttribute("data-target","#party")
    }
  }

  getParty(){
    this.http.getTrainerPoke().then((res)=>{
      for(let i = 0; i< res.length; i++ ){
          if(res[i].box === 0){
            let currentPartyPoke: PokeBox={
              nickname: "",
              box: 1,
              poke_number: res[i].poke_number,
              trainer: res[i].trainer,
              pokemon_Id: res[i].pokemon_Id
            }
            this.http.getPokemon(res[i].poke_number.toString()).then((res)=>{
              let currentPokemon: Pokemon={
                id: res.id,
                name: res.name,
                sprite: res.sprites.front_default,
                types: res.types,
                stats: res.stats,
                pokemonId: currentPartyPoke.pokemon_Id
              };
              this.party.push(currentPokemon);
            });
            this.partyPoke.push(currentPartyPoke);
          }
        }
    });
  }

  moveToBox(pokemonId: number){
    if(this.pokeInParty > 1){
      for(let poke of this.partyPoke){
        if(pokemonId === poke.pokemon_Id){
          this.http.movePokemonToParty(JSON.parse(JSON.stringify(poke)));
          this.pokeInParty--;
        }
      }
    }
    else{
      document.getElementById("movetoBox").setAttribute("data-target","#box")
    }
  }
}
