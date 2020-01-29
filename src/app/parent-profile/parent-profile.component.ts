import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Parent } from '../model/Parent';

@Component({
  selector: 'app-parent-profile',
  templateUrl: './parent-profile.component.html',
  styleUrls: ['./parent-profile.component.css']
})
export class ParentProfileComponent implements OnInit {

  user:Parent;
  constructor(){}
      

  ngOnInit() {
    
    this.user = JSON.parse(sessionStorage.getItem('parent'));
    console.log(this.user);
  }

}
