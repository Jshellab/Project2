import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Trainer } from '../Trainer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tempUsername: "";
  tempPw: "";
  currentTrainer: Trainer;
  notValid: boolean = false;
  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
  }

  getTrainer(){
    this.http.getTrainers().then((res)=>{
      for(let i = 0; i < res.length; i++){
        this.currentTrainer = res[i];
        if((this.currentTrainer.username === this.tempUsername) && this.currentTrainer.password === this.tempPw){
          this.router.navigateByUrl('/userscreen');
        }
      }
      this.notValid = true;
    });
  }
  onSubmit(){
    this.getTrainer();
  }

  register(){
    this.router.navigateByUrl("/register");
  }
}
