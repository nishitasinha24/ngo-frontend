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

  requestitem : ChildRequest ;
  ngoitem :Ngo;
  parentitem: Parent;
  childitem: Children;
  details: any;
  request:any=[];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: UserService) { }


  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('req_id');
    this.details = this.service.getRequestDetails(id).then(response=>{
      this.requestitem = new ChildRequest(response);
      
      this.ngoitem = this.requestitem.ngo;
      this.parentitem = this.requestitem.parent;
      this.childitem = this.requestitem.child;
    }).catch(error=>{
      console.log(error);
    });
    console.log(this.details);

    
  }

  onClickAccept()
  {
    let id = this.route.snapshot.paramMap.get('req_id');
    this.details = this.service.getRequestDetails(id);
    this.service.ngoResponse(this.details);
  }

}
