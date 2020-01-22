import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

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
    console.log("user"+user);
    this.service.ngoSignIn(user).then(response=>{
      console.log(response);
      this.router.navigate(['/childoptions']);
    }).catch(error=>{
      console.log(error);
    });
  }

}
