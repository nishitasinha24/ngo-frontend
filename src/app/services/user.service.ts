import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Ngo } from '../model/Ngo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  signIn(user)
  {
    console.log(user+"hello");
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

  // ngoSignUp(user)
  // {
  //   return this.http.post('http://localhost:8098/ngoreg',user).toPromise();

  // }

  childRegister(user)
  {
    return this.http.post('http://localhost:8098/childreg',user).toPromise();
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
}
