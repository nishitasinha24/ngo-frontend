import { Component, OnInit } from '@angular/core';
import { error } from 'util';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 
export class LoginComponent implements OnInit {

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {
  }

  authenticate(user)
  {
    console.log(user);
    this.service.signIn(user).then(response=>{
      console.log(response);
      this.router.navigate(['/profile']);
    }).catch(error=>{
      console.log(error);
    });
  }3
 
}
