export class Ngo {
    ngo_id:number;
    ngo_name:string;

    constructor(ngoResponse : any)
    {
        this.ngo_id = ngoResponse.ngo_id;
        this.ngo_name = ngoResponse.ngo_name;
    }
}