import { Component, OnInit } from '@angular/core';
import { Posts} from '../Posts';
import { UserPost } from '../UserPost';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  Postings: Array <Posts> = [];
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.http.getPost().then((res) => {
      console.log(res);
      for (let i = 0; i < res.length; i++) {
        let currentPost: Posts = {
          post_Id: 0,
          trade_pokemon: 0,
          receive_pokemon: 0,
          trainer_Id: 0,
          description: '',
          status: '',
        };
        currentPost.post_Id = res[i].post_Id;
        currentPost.trade_pokemon = res[i].trade_pokemon;
        currentPost.receive_pokemon = res[i].receive_pokemon;
        currentPost.trainer_Id = res[i].trainer.trainer_Id;
        currentPost.description = res[i].description;
        currentPost.status = res[i].status;
        this.Postings.push(currentPost);
        console.log(this.Postings);
      }
    });
  }

}
