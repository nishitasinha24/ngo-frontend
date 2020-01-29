import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-ngo-request-list',
  templateUrl: './ngo-request-list.component.html',
  styleUrls: ['./ngo-request-list.component.css']
})
export class NgoRequestListComponent implements OnInit {

  user:any;
  request:any=[];
  id:any;
  constructor(public router: Router,
    private service: UserService
    ) {
      
      this.id = sessionStorage.getItem('ngoid');
      console.log(this.id);
       this.service.ngoRequestList(JSON.parse(sessionStorage.getItem('ngoid'))).then(response => {
        //console.log(response);
        this.user = response;
      }).catch(error => {
          console.log(error);
        });
    }


  ngOnInit() {
    /*this.service.ngoRequestList(this.user).subscribe((response) =>{
      console.log(response);


      this.user = response;
      //this.router.navigate(['/ngologin']);

    }, (error) => {
      console.log(error);
    });*/
  }


  /*this.service.requestList(this.user).then(response=>{
    this.user = response;
    console.log(this.user);
  }).catch(error=>{
    console.log(error);
  });
*/  
}
