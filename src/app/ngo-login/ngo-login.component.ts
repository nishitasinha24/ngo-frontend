import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Ngo } from '../model/Ngo';


@Component({
  selector: 'app-ngo-login',
  templateUrl: './ngo-login.component.html',
  styleUrls: ['./ngo-login.component.css']
})
export class NgoLoginComponent implements OnInit {

  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }

  
  ngoAuthenticate(user)
  {
    this.service.ngoSignIn(user).then(response=>{
      //console.log(response);
      let n = new Ngo(response);
      sessionStorage.setItem('ngoid', JSON.stringify(n));
      console.log(sessionStorage.getItem('ngoid'));
      this.router.navigate(['/childoptions']);
    }).catch(error=>{
      console.log(error);
    });
  }

}
 