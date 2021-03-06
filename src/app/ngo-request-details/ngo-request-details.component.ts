import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Ngo } from '../model/Ngo';
import { ChildRequest } from '../model/ChildRequest';
import { Parent } from '../model/Parent';
import { Children } from '../model/Children';

@Component({
  selector: 'app-ngo-request-details',
  templateUrl: './ngo-request-details.component.html',
  styleUrls: ['./ngo-request-details.component.css']
})
export class NgoRequestDetailsComponent implements OnInit {

  requestitem : ChildRequest;
  ngoitem :Ngo;
  parentitem: Parent;
  childitem: Children;
  details:any;
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
      //this.ngoitem = this.requestitem.ngo;
      this.parentitem = new Parent(this.requestitem.parent);
      console.log(this.parentitem.maleParName);
      this.childitem = new Children(this.requestitem.child);
    }).catch(error=>{
      console.log(error);
    });
    console.log(this.details);
  }

  onClickAccept()
  {
    //let id = this.route.snapshot.paramMap.get('req_id');
     this.service.ngoResponse(this.details);
    //this.service.ngoResponse(this.details);
  }

}
