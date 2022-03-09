import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, tap} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isSignedIn$=new BehaviorSubject(false);
  constructor(private http:HttpClient) { }
  signUp(user){
    return this.http.post<any>('http://localhost:3000/api/signup',user).pipe(tap(()=>{
      this.isSignedIn$.next(true);
    }));
  }
  login(){

  }
}
