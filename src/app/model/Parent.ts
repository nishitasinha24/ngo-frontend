export class Parent {
    reg_No: number;
    gender: string;
    maleParName: string;
    femaleParName: string;
    maleParAge: number;
    femaleParAge: number;
    compositeAge: number;
    mOccupation: string;
    fOccupation: string;
    mIncome : number;
    fIncome : number;
    numOfChildren: number;
    address: string;
    city: string;
    district: string;
    state: string;
    pinCode: string;
    adharNumber: string;
    mobileNumber: string;
    maritalStatus: string;
    reg_date: string;
    numOfchildrenParentHave: number;
    email: string;
    constructor(parentResponse : any)
    {
      this.gender= parentResponse.gender;
      this.reg_No= parentResponse.reg_No;
      this.maleParAge= parentResponse.maleParAge;
      this.maleParName= parentResponse.maleParName;
      this.femaleParAge= parentResponse.femaleParAge;
      this.femaleParName= parentResponse.femaleParName;
      this.mOccupation= parentResponse.mOccupation;
      this.fOccupation= parentResponse.fOccupation;
      this.mIncome= parentResponse.mIncome;
      this.fIncome= parentResponse.fIncome;
      this.numOfChildren= parentResponse.numOfChildren;
      this.address= parentResponse.address;
      this.city= parentResponse.city;
      this.district= parentResponse.district;
      this.state= parentResponse.state;
      this.pinCode= parentResponse.pinCode;
      this.adharNumber= parentResponse.adharNumber;
      this.mobileNumber= parentResponse.mobileNumber;
      this.maritalStatus= parentResponse.maritalStatus;
      this.reg_date= parentResponse.reg_date;
      this.numOfchildrenParentHave= parentResponse.numOfchildrenParentHave;
      this.email= parentResponse.email;
    }
  }