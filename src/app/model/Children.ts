import { Parent } from './Parent';
import { Ngo } from './Ngo';

export class Children {
    child_id:number;
    child_name:string;
    age:number;
    gender: string;
    color: string;
    health: string;
    bloodGroup: string;
    parent: Parent;
    ngo: Ngo;
    constructor(childResponse : any)
    {
        this.age = childResponse.age;
        this.child_id = childResponse.child_id;
        this.child_name = childResponse.child_name;
        this.gender = childResponse.gender;
        this.color = childResponse.color;
        this.health = childResponse.health;
        this.bloodGroup = childResponse.bloodGroup;
        this.parent = childResponse.parent;
        this.ngo = childResponse.ngo;
    }
}