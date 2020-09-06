import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { User } from '../Models/User'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  authenticate(userName:string, password:string): Observable<any>{
    var user = {
      userName: userName,
      password: password
    }
    return this.httpClient.post<User>("http://localhost:8080/loginuser", user).pipe(
        map(
          userData => {
           sessionStorage.setItem('userName',userName);
           return userData;
          }
        )
   
       );
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('userName');
    // console.log(!(user===null));
    return !(user===null);
  }

  logout(){
    sessionStorage.removeItem('userName')
  }

  

  register(user: User){
    return this.httpClient.post<User>("http://localhost:8080/registeruser", user).pipe(
      map(
        userData => {
         sessionStorage.setItem('userName',user.userName);
         return userData;
        }
      )
 
     );
  }
}
