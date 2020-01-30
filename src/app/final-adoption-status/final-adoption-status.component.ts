import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-final-adoption-status',
  templateUrl: './final-adoption-status.component.html',
  styleUrls: ['./final-adoption-status.component.css']
})
export class FinalAdoptionStatusComponent implements OnInit {

  user:any;
  request:any=[];
  id:any;
  constructor(public route: Router,
    private service: UserService) { }

  ngOnInit() {
    this.id = sessionStorage.getItem('parent');
      console.log(this.id);
       this.service.parentRequestList(JSON.parse(sessionStorage.getItem('parent'))).then(response => {
        //console.log(response);
        this.user = response;
      }).catch(error => {
          console.log(error);
        });
  }

}
