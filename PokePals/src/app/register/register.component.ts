import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpService } from "../http.service";
import { Trainer } from "../Trainer";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newTrainer: Trainer={
    username: "",
    firstname: "",
    lastname: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  };


  constructor(private route: ActivatedRoute, private location: Location,
    private http: HttpService, private router: Router) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  createUser(){
    var json = JSON.parse(JSON.stringify(this.newTrainer));
    console.log(json);
    this.http.createUser(json);
    this.router.navigateByUrl('/userscreen');

  }

}
