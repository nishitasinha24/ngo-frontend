export class Children {
    child_id:number;
    child_name:string;
    age:number;

    constructor(childResponse : any)
    {
        this.age = childResponse.age;
        this.child_id = childResponse.child_id;
        this.child_name = childResponse.child_name;
    }
}