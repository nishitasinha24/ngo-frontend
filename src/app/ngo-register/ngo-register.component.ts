import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Ngo } from '../model/Ngo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngo-register',
  templateUrl: './ngo-register.component.html',
  styleUrls: ['./ngo-register.component.css']
})
export class NgoRegisterComponent implements OnInit {
  ngo:any=[];
  

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {
  }
  //id:any;
  //data:any;
  ngoRegister(user)
  {
    this.service.ngoSignUp(user).subscribe((response) =>{
      console.log(response);
      this.ngo = response;
      this.router.navigate(['/ngologin']);

    }, (error) => {
      console.log(error);
    });
  }

  
    
}
