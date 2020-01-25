import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {
  }

  childReg(user)
  {
    this.service.childRegister(user).then(response=>{
      console.log(response);
      localStorage.getItem('ngoid');
      console.log(localStorage.getItem('ngoid'));
      this.router.navigate(['/profile']);
    }).catch(error=>{
      console.log(error);
    });
  }
}
