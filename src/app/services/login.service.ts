import { Injectable } from '@angular/core';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: Login[] = []
  constructor() { 

    const user:Login = {
      username: "Carlos",
      password: "asteriscos",
    }
    this.users.push(user);

    const user2:Login = {
      username: "Ionar",
      password: "asteriscos",
    }
    this.users.push(user2);

  }
  getList() : Login[]{
    return this.users;
  }

  getByUsername(username: string){
    return this.users.find( user => user.username === username);
  }
}
