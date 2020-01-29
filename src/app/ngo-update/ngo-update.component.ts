import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Ngo } from '../model/Ngo';

@Component({
  selector: 'app-ngo-update',
  templateUrl: './ngo-update.component.html',
  styleUrls: ['./ngo-update.component.css']
})
export class NgoUpdateComponent implements OnInit {

  constructor(private service:UserService, private router:Router) { }
  ngo:any=[];

  ngOnInit() {
  }

  ngoUpdate(user)
  {
    this.service.signUp(user).then(response=>{
      let ngo = new Ngo(response);
      console.log(ngo);
      this.router.navigate(['/ngoprofile']);
    }).catch(error=>{
      console.log(error);
    });
  }

}
