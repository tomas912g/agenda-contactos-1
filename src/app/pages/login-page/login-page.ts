import { Component,inject } from '@angular/core';
import { AuthService } from '../../service/auth-service';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {
  errorLogin = false;
  authService = inject(AuthService);
  isLoading = false;

  async login(form:any){
    console.log(form.value)
    this.errorLogin = false;
    if(!form.email || !form.password){
    if(!form.value.email || !form.value.password){
      this.errorLogin = true;
      return
    }
    this.isLoading = true;
    this.authService.login(form.value);
    this.isLoading = false;
    this.errorLogin = true;
  }
}}
