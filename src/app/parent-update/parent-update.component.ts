import { Component, OnInit } from '@angular/core';
import { Parent } from '../model/Parent';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-update',
  templateUrl: './parent-update.component.html',
  styleUrls: ['./parent-update.component.css']
})
export class ParentUpdateComponent implements OnInit {

  constructor(private service:UserService, private router:Router) { }

  ngOnInit() {
  }

  parentUpdate(user)
  {
    this.service.signUp(user).then(response=>{
      let ngo = new Parent(response);
      console.log(ngo);
      this.router.navigate(['/parentprofile']);
    }).catch(error=>{
      console.log(error);
    });
  }

}
