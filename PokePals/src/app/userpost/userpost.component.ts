import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../Pokemon';
import { HttpService } from '../http.service';
import { UserPost } from '../UserPost';
import { SubmitPost } from '../SubmitPost';

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css']
})
export class UserpostComponent implements OnInit {
  url: '';
  i: 0;
  Postings: Array <UserPost> = [];
subPost: SubmitPost = {
  trade_pokemon: 0,
  receive_pokemon: 0,
  description: '',
  status: 'open',
  trainer: {
    trainer_Id: 0
  }
};
  // currentPost: UserPost = {
  //   post_Id: 0,
  //   trade_pokemon: 0,
  //   receive_pokemon: 0,
  //   description: '',
  //   status: '',
  // };
  constructor(private http: HttpService) { }
  ngOnInit() {
    this.getPosts();
  }
  PushInfo() {
    this.subPost.description = document.getElementById('DescripBox').innerText;
    this.subPost.status = 'open';
    this.subPost.trainer.trainer_Id = this.http.trainer.trainer_Id;
    var json = JSON.parse(JSON.stringify(this.subPost));
    this.http.addUserPost(json);
    // this.subPost.trade_pokemon;
    // this.subPost.status = 'open';
    // this.subPost.trainer.trainer_Id = this.http.trainer.trainer_Id;
    // this.http.addUserPost();
  }
  getPosts() {
    this.http.getUserPost().then((res) => {
      for (let i = 0; i < res.length; i++) {
        let currentPost: UserPost = {
          post_Id: 0,
          trade_pokemon: 0,
          receive_pokemon: 0,
          description: '',
          status: '',
        };
        currentPost.post_Id = res[i].post_Id;
        currentPost.trade_pokemon = res[i].trade_pokemon;
        currentPost.receive_pokemon = res[i].receive_pokemon;
        currentPost.description = res[i].description;
        currentPost.status = res[i].status;
        console.log(currentPost);
        this.Postings.push(currentPost);
        console.log(this.Postings);
      }
    });
  }

}
// for ( i = 0; i < 2; i++) {
//   this.currentPost.post_Id = res[i].post_Id;
//   this.currentPost.trade_pokemon = res[i].trade_pokemon;
//   this.currentPost.receive_pokemon = res[i].receive_pokemon;
//   this.currentPost.description = res[i].description;
//   this.currentPost.status = res[i].status;
//   this.Postings[i] = this.currentPost;
// }
