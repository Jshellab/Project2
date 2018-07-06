import { Component, OnInit } from '@angular/core';
import { Posts} from '../Posts';
import { UserPost } from '../UserPost';
import { HttpService } from '../http.service';
import { PokeBox } from '../PokeBox';
import { Trainer } from '../Trainer';
import * as SendBird from 'SendBird';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  Postings: Array <Posts> = [];
  offeringPokemon: PokeBox;
  lookingForPokemon: PokeBox;
  offeringTrainer: Trainer;
  constructor(private http: HttpService) { }
  ngOnInit() {
    this.getPosts();
  }
  trade(offeringTrainerName: string, offeringPoke: number, lookingForPoke: number, postId: number){
    this.http.getOtherTrainerPoke(offeringTrainerName).then((res)=>{
      for(let i=0; i<res.length; i++){
        if(res[i].poke_number === offeringPoke){
          this.offeringPokemon = res[i];
          this.offeringPokemon.trainer = this.http.trainer;
          this.offeringPokemon.box = 1;
          this.http.tradePokemon(this.offeringPokemon);
        }
      }

    });

    this.http.getOtherTrainerPoke(this.http.trainer.username).then((res)=>{
      for(let i=0; i<res.length; i++){
        if(res[i].poke_number === lookingForPoke){
          this.lookingForPokemon = res[i];
          this.http.getTrainer(offeringTrainerName).then((res1)=>{
            this.offeringTrainer=res1;
            this.lookingForPokemon.trainer=this.offeringTrainer;
            this.lookingForPokemon.box = 1;
            this.http.tradePokemon(this.lookingForPokemon);
          });
        }
      }
    });
    this.http.deletePostById(postId);
  }

  getPosts() {
    this.http.getPost().then((res) => {
      for (let i = 0; i < res.length; i++) {
        let currentPost: Posts = {
          post_Id: 0,
          trade_pokemon: 0,
          receive_pokemon: 0,
          trainer_Id: 0,
          description: '',
          status: '',
          username: ''
        };
        currentPost.post_Id = res[i].post_Id;
        currentPost.trade_pokemon = res[i].trade_pokemon;
        currentPost.receive_pokemon = res[i].receive_pokemon;
        currentPost.trainer_Id = res[i].trainer.trainer_Id;
        currentPost.description = res[i].description;
        currentPost.status = res[i].status;
        currentPost.username= res[i].trainer.username;
        this.Postings.push(currentPost);
      }
    });
  }

}
