import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Ngo } from '../model/Ngo';
import { Observable } from 'rxjs';
import { ChildRequest } from '../model/ChildRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  register() {
    throw new Error("Method not implemented.");
  }

  constructor(private http:HttpClient) { }

  signIn(user)
  {
    console.log(user);
    return this.http.post('http://localhost:8098/auth',user).toPromise();
  }

  signUp(user)
  {
    return this.http.post('http://localhost:8098/reg',user).toPromise();

  }

  ngoSignIn(user)
  {
    return this.http.post('http://localhost:8098/ngoauth',user).toPromise();
  }

  public ngo: Observable<Ngo[]>;
  ngoSignUp(user):Observable<Ngo[]>
  {
    this.ngo =  this.http.post<Ngo[]>('http://localhost:8098/ngoreg', user);
    return this.ngo;
  }

  ngoUpdate(user)
  {
    return this.http.post('http://localhost:8098/ngoupdate',user).toPromise();

  }

  parentUpdate(user)
  {
    return this.http.post('http://localhost:8098/parentupdate',user).toPromise();

  }

  getNgo():Observable<Ngo[]>
  {
    return this.ngo;
  }
  
  childRegister(user,id)
  {
    console.log(id);

    let params1= new HttpParams().set('id',id);
    return this.http.post('http://localhost:8098/childreg',user,{params:params1}).toPromise();
  }
  
  childList(user)
  {
 
    return this.http.post('http://localhost:8098/childlist', user).toPromise();
  }

  ngoRequestList(user)
  {
    return this.http.post('http://localhost:8098/ngorequestlist', user).toPromise();
  }

  parentRequestList(user)
  {
    return this.http.post('http://localhost:8098/parentrequestList', user).toPromise();
  }


  getRequestDetails(id)
  {
    console.log(id);
    return this.http.get('http://localhost:8098/oneRequestfromlist/'+id).toPromise(); 
  }
 
  /*public req: Observable<Ngo[]>;
  ngoRequestList(user):Observable<Ngo[]>
  {
    this.req = this.http.post<Ngo[]>('http://localhost:8098/ngorequestlist', user);
    return this.req;
  }

  getChildRequest():Observable<Ngo[]>
  {
    return this.req;
  }*/

  ngoResponse(user)
  {
    return this.http.post('http://localhost:8098/responsefromngo', user);
  }

  ngoDelete(id)
  {
    console.log(id);
    return this.http.delete('http://localhost:8098/delete/'+id);
  }

  parentDelete(id)
  {
    console.log(id);
    return this.http.delete('http://localhost:8098/parentdelete/'+id);
  }

  
}
