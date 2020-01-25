import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Ngo } from '../model/Ngo';


@Component({
  selector: 'app-ngo-register',
  templateUrl: './ngo-register.component.html',
  styleUrls: ['./ngo-register.component.css']
})
export class NgoRegisterComponent implements OnInit {
  ngo:any=[];
  

  constructor(private service:UserService) { }

  ngOnInit() {
  }
  //id:any;
  //data:any;
  ngoRegister(user)
  {
    
    this.service.ngoSignUp(user).subscribe((response) =>{
      
      
      this.ngo = response;
    }, (error) => {
      console.log(error);
    });
  }

  
    
}
