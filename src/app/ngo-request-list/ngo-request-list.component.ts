import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ngo-request-list',
  templateUrl: './ngo-request-list.component.html',
  styleUrls: ['./ngo-request-list.component.css']
})
export class NgoRequestListComponent implements OnInit {

  user:any;
  request:any=[];
  constructor(public router: Router,
    private service: UserService
    ) {
      this.service.requestList(this.user).then(response=>{
        this.user = response;
        console.log(this.user);
      }).catch(error=>{
        console.log(error);
      });
    }

  ngOnInit() {
  }

  
}
