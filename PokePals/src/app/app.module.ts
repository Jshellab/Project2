import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './register/register.component';
import { UserscreenComponent } from './userscreen/userscreen.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BoxesComponent } from './boxes/boxes.component';
import { PostComponent } from './post/post.component';
import { ProfileComponent } from './profile/profile.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserscreenComponent,
    NavbarComponent,
    BoxesComponent,
    PostComponent,
    ProfileComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
