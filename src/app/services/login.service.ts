import { Injectable } from '@angular/core';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

user:Login = {
  username: "admin",
  password: "admin",
}
  constructor() { 
  }

  login(username: string, password: string){
    debugger;
    return this.user.username == username && this.user.password == password;
  }
}
