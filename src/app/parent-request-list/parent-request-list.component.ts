import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-parent-request-list',
  templateUrl: './parent-request-list.component.html',
  styleUrls: ['./parent-request-list.component.css']
})
export class ParentRequestListComponent implements OnInit {

  user:any;
  request:any=[];
  id:any;
  constructor(public router: Router,
    private service: UserService) { 
      this.id = sessionStorage.getItem('parent');
      console.log(this.id);
       this.service.parentRequestList(JSON.parse(sessionStorage.getItem('parent'))).then(response => {
        //console.log(response);
        this.user = response;
      }).catch(error => {
          console.log(error);
        });
    }

  ngOnInit() {
  }

}
