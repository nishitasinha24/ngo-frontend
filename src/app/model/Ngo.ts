export class Ngo {
    ngo_id:number;
    ngo_email:string;

    constructor(ngoResponse : any)
    {
        this.ngo_id = ngoResponse.ngo_id;
        this.ngo_email = ngoResponse.email;
    }
}