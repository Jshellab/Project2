import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../Pokemon';
import { HttpService } from '../http.service';
import { UserPost } from '../UserPost';

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css']
})
export class UserpostComponent implements OnInit {
  url: '';
  currentPost: UserPost = {
    postid: 0,
    userID: 0,
    poke1: 0,
    poke2: 0,
    description: ''
  };
  constructor(private http: HttpService) { }
  ngOnInit() {
  }
  getPosts() {
    this.http.getUserPost(this.url).then((res) => {
      this.currentPost.postid = res.postid;
      this.currentPost.userID = res.userID;
      this.currentPost.poke1 = res.poke1;
      this.currentPost.poke2 = res.poke2;
      this.currentPost.description = res.description;
    });
  }

}
