export class Ngo {
    ngo_id:number;
    ngo_name:string;
    email:string;
    setUpDate:Date;
    address:string;
    state:string;
    district:string;
    contactPerson:string;
    phonenumber:string;



    constructor(ngoResponse : any)
    {
        this.ngo_id = ngoResponse.ngo_id;
        this.ngo_name = ngoResponse.ngoName;
        this.email = ngoResponse.email;
        this.setUpDate = ngoResponse.setUpDate;
        this.address = ngoResponse.address;
        this.state = ngoResponse.state;
        this.district = ngoResponse.district;
        this.contactPerson = ngoResponse.contactPerson;
        this.phonenumber = ngoResponse.PhoneNumber;
    }
}