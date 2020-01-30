import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Ngo } from '../model/Ngo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngo-delete',
  templateUrl: './ngo-delete.component.html',
  styleUrls: ['./ngo-delete.component.css']
})
export class NgoDeleteComponent implements OnInit {

  ngo: any;
  id: number;
  ngoitem: Ngo;
  constructor(private service: UserService, private router: Router) { 
    
  }

  ngOnInit() {
    this.ngo = sessionStorage.getItem('ngoid');
    console.log(this.ngo);
    this.ngoitem = new Ngo(JSON.parse(this.ngo)); 
    
    this.id = this.ngoitem.ngo_id;
    console.log(this.id);
   console.log(this.service.ngoDelete(this.id));
   //this.router.navigate(['/home']);
  }

}
