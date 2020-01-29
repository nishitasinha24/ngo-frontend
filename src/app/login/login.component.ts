import { Component, OnInit } from '@angular/core';
import { error } from 'util';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Parent } from '../model/Parent';



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
    this.service.signIn(user).then(response=>{
      console.log(response);
      let p = new Parent(response);
      sessionStorage.setItem('parent', JSON.stringify(p));
      console.log(sessionStorage.getItem('parent'));
      this.router.navigate(['/parentoptions']);
    }).catch(error=>{
      console.log(error);
    });
  }
 
}
