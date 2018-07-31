import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {




  constructor(private http: HttpClient) { }
       removeSessionid() :any {
          console.log("INSERVICE removing sessionId")
          return this.http.get('/removesessionid/');
        }     
  
        getContact(userid: string) :any {
          console.log("INSERVICE getting contact")
          return this.http.get('/getcontact/'+userid);
        }     
        getSessionid() :any {
          console.log("INSERVICE getting sessionId")
          return this.http.get('/getsessionid/');
        }     
        passReg(user) :any { 
          console.log("INSERVICE", user)
            return this.http.post('/postreg', user);
           // return this.http.get('/notsget');
          }
          passLog(user) :any { 
            console.log("INSERVICE", user)
              return this.http.post('/postlog', user);
             // return this.http.get('/notsget');
            }
    }