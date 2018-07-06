import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-userscreen',
  templateUrl: './userscreen.component.html',
  styleUrls: ['./userscreen.component.css']
})
export class UserscreenComponent implements OnInit {
  firstName = '';
  lastName = '';
  NameSpot = "";
  constructor(private route: ActivatedRoute, private location: Location,
              private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.firstName = this.http.trainer.firstname;
    this.lastName = this.http.trainer.lastname;
    this.NameSpot = this.firstName +" "+ this.lastName;
  }
  deleteMe() {
    let url = this.http.url2 +'/delete/'+ this.http.trainer.trainer_Id;
    // console.log(url);
    this.http.deleteUser(url);
    this.router.navigateByUrl('/login');
  }
}
