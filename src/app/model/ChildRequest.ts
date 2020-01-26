export class ChildRequest {
    ngo_id:number;
    parent_id:number;
    req_id:number;

    constructor(requestResponse : any)
    {
        this.ngo_id = requestResponse.ngo_id;
        this.parent_id = requestResponse.reg_No;
        this.req_id = requestResponse.req_id;
    }
}