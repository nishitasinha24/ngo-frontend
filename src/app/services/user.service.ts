import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Ngo } from '../model/Ngo';
import { Observable } from 'rxjs';

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

  getNgo():Observable<Ngo[]>
  {
    return this.ngo;
  }
  
  childRegister(user)
  {
 
    return this.http.post('http://localhost:8098/childreg',user).toPromise();
  }
  
  childList(user)
  {
 
    return this.http.post('http://localhost:8098/childlist', user).toPromise();
  }

  requestList(user)
  {
    return this.http.post('http://localhost:8098/requestlist', user).toPromise();
  }


  
}
