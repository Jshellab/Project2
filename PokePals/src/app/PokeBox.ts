import { Trainer } from "./Trainer";

export interface PokeBox {
  nickname: string;
  box: number;
  poke_number: number;
  trainer: Trainer;
  pokemon_Id: number;
}
