import { Component, OnInit } from '@angular/core';
import { Parent } from '../model/Parent';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-parent-delete',
  templateUrl: './parent-delete.component.html',
  styleUrls: ['./parent-delete.component.css']
})
export class ParentDeleteComponent implements OnInit {

  parent: any;
  parentitem: Parent;
  id:number;
  constructor(private service: UserService) { }

  ngOnInit() {
    this.parent = sessionStorage.getItem('parent');
    console.log(this.parent);
    this.parentitem = new Parent(JSON.parse(this.parent)); 
    
    this.id = this.parentitem.reg_No;
    console.log(this.id);
   console.log(this.service.parentDelete(this.id));
  }

}
