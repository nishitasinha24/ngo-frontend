import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {

  user:any;

  debugger;
  constructor(public router: Router,
              private service: UserService
              ) {
                sessionStorage.getItem('ngoid');
                console.log(sessionStorage.getItem('ngoid'));
                 this.service.childList(JSON.parse(sessionStorage.getItem('ngoid'))).then(response => {
                  console.log(response);
                  this.user = response;
                }).catch(error => {
                    console.log(error);
                  });
              }
      
            

  ngOnInit() {
  
  }


    
  }

