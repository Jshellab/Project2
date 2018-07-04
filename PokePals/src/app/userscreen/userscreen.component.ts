import { Component, OnInit } from '@angular/core';
import{ HttpService } from "../http.service";


@Component({
  selector: 'app-userscreen',
  templateUrl: './userscreen.component.html',
  styleUrls: ['./userscreen.component.css']
})
export class UserscreenComponent implements OnInit {
  firstName = '';
  lastName = '';
  NameSpot = "";
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.firstName = this.http.trainer.firstname;
    this.lastName = this.http.trainer.lastname;
    this.NameSpot = this.firstName+ " "+this.lastName;
  }

}
