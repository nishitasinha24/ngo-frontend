import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Ngo } from '../model/Ngo';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  ngo:Ngo
  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {
    this.ngo = JSON.parse(sessionStorage.getItem('ngoid'));

  }

  childReg(user)
  {
    this.service.childRegister(user,this.ngo.ngo_id).then(response=>{
      console.log(response);
      
      this.router.navigate(['/childlist']);
    }).catch(error=>{
      console.log(error);
    });
  }
}
