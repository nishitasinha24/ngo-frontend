import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Parent } from '../model/Parent';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {
  }
  register(user)
  {
    this.service.requestList(user).then(response=>{
      let parent = new Parent(response);
      console.log(parent);
      this.router.navigate(['/profile']);
    }).catch(error=>{
      console.log(error);
    });
  }

}
