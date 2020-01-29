import { Ngo } from './Ngo';
import { Parent } from './Parent';
import { Children } from './Children';

export class ChildRequest {
    //ngo_id:number;
    //parent_id:number;
    req_id:number;
    ngo:Ngo;
    parent:Parent;
    child:Children;
    genderOfChild: string;
    healthStatusOfChild: string;
    categoryOfChild: string;
    ageOfChild: number;
    state: string;
    statusOfRequest: string;
    moto: string;
    constructor(requestResponse : any)
    {
        //this.ngo_id = requestResponse.ngo_id;
        //this.parent_id = requestResponse.reg_No;
        this.req_id = requestResponse.req_id;
        this.ngo = requestResponse.ngo;
        this.parent = requestResponse.parent;
        this.child = requestResponse.child;
        this.genderOfChild = requestResponse.genderOfChild;
        this.healthStatusOfChild = requestResponse.healthStatusOfChild;
        this.categoryOfChild = requestResponse.categoryOfChild;
        this.ageOfChild = requestResponse.ageOfChild;
        this.state = requestResponse.state;
        this.statusOfRequest = requestResponse.statusOfRequest;
        this.moto = requestResponse.moto;
    }
}