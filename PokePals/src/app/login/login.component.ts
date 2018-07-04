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
    this.http.user = "/"+this.tempUsername;
    this.http.getTrainer().then((res)=>{
       if(res !== null){
         if(res.password === this.tempPw){
          this.http.trainer = res;
          this.router.navigateByUrl('/userscreen');
         }
         else{
          this.notValid = true;
         }
       }
       else{
        this.notValid = true;
       }
    });
  }
  onSubmit(){
    this.getTrainer();
  }

  register(){
    this.router.navigateByUrl("/register");
  }
}
