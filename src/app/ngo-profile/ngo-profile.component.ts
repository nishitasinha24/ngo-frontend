import { Component, OnInit } from '@angular/core';
import { Ngo } from '../model/Ngo';

@Component({
  selector: 'app-ngo-profile',
  templateUrl: './ngo-profile.component.html',
  styleUrls: ['./ngo-profile.component.css']
})
export class NgoProfileComponent implements OnInit {

  user:Ngo;
  constructor() { }

  ngOnInit() {
    
    this.user = JSON.parse(sessionStorage.getItem('ngoid'));
    console.log(this.user);
  }

}
