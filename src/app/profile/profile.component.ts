import { Component, OnInit } from '@angular/core';
import { Ngo } from '../model/Ngo';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public ngo: Ngo[];
  

  constructor(
    private service: UserService, 
  ) { }

  ngOnInit() {
    //console.log(localStorage.getItem("Id")); 
    // this.service.getNgo()
    // .subscribe(data => this.ngo = data);
    // console.log(this.ngo);
  }

}
