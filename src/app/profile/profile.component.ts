import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Ngo } from '../model/Ngo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public ngo: Observable<Ngo[]>;


  constructor(public service: UserService, ) { }

  ngOnInit() {
    this.ngo = this.service.getNgo();
    // .subscribe(data => this.ngo = data);
    console.log(this.ngo);
  }

}
