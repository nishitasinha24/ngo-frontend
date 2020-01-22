export class Parent {
    reg_No: number;
    gender: string;
    maleParAge: string;


    constructor(parentResponse : any)
    {
      this.gender= parentResponse.gender;
      this.reg_No= parentResponse.reg_No;
      this.maleParAge= parentResponse.maleParAge;
    }
  }