import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userscreen',
  templateUrl: './userscreen.component.html',
  styleUrls: ['./userscreen.component.css']
})
export class UserscreenComponent implements OnInit {
  firstName = 'James';
  lastName = 'Smith';
  NameSpot = this.firstName + ' ' + this.lastName;
  constructor() { }

  ngOnInit() {
  }

}
