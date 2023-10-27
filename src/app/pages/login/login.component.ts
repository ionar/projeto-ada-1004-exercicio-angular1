import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/model/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm : FormGroup

  constructor(
    private toastr: ToastrService, 
    private loginService:LoginService,
    private router: Router
  ){
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  onSubmit(login:Login){
    if(this.loginService.login(login.username,login.password)){
      //vai para o componenete de lista
      this.router.navigate(['customer-list']);

      //ou mensagem de erro (toastr)
    //   this.router.navigate(['customer-list']);
    //   this.toastr.danger("Cliente Salvo com sucesso","Sucesso!");
     } else {
      this.toastr.error("Credenciais invalidas","Só que não!");
     }

  }
}
