import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ChildRequest } from '../model/ChildRequest';
import { Parent } from '../model/Parent';
import { Children } from '../model/Children';
import { Ngo } from '../model/Ngo';

@Component({
  selector: 'app-parent-request-details',
  templateUrl: './parent-request-details.component.html',
  styleUrls: ['./parent-request-details.component.css']
})
export class ParentRequestDetailsComponent implements OnInit {

  requestitem : ChildRequest;
  ngoitem :Ngo;
  parentitem: Parent;
  childitem: Children;
  details: any;
  request:any=[];
  res:any;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: UserService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('req_id');
    this.details = this.service.getRequestDetails(id).then(response=>{
      this.requestitem = new ChildRequest(response);
      //console.log(this.requestitem);
      this.ngoitem = this.requestitem.ngo;
      //this.parentitem = new Parent(this.requestitem.parent);
      //console.log(this.parentitem.maleParName);
      this.childitem = new Children(this.requestitem.child);
    }).catch(error=>{
      console.log(error);
    });
  }

}
