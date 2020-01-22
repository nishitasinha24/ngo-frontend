import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngo-register',
  templateUrl: './ngo-register.component.html',
  styleUrls: ['./ngo-register.component.css']
})
export class NgoRegisterComponent implements OnInit {

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {
  }

  ngoRegister(user)
  {
    this.service.ngoSignUp(user).subscribe(response=>{
      console.log(response);
      this.router.navigate(['/profile']);
    });
  }
}
