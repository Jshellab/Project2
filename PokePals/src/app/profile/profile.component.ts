import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName = '';
  firstPersonName = '';
  lastPersonName = '';
  StreetAddress = '';
  CityPlace = '';
  StatePlace = '';
  ZipcodePlace = '';
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.userName = this.http.trainer.username;
    this.firstPersonName = this.http.trainer.firstname;
    this.lastPersonName = this.http.trainer.lastname;
    this.StreetAddress = this.http.trainer.address;
    this.CityPlace = this.http.trainer.city;
    this.ZipcodePlace = this.http.trainer.zipcode;
  }

}
