import { Component,inject } from '@angular/core';
import { AuthService } from '../../service/auth-service';
import { Spinner } from "../../component/spinner/spinner";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [RouterModule,FormsModule,Spinner],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {
  errorLogin = false;
  authService = inject(AuthService);
  isLoading = false;

  async login(form:any){
    if (!form.value.email || !form.value.password) {
      this.errorLogin = true;
      return;
    }
    this.isLoading = true;
    await this.authService.login(form.value);
    this.isLoading = false;
    this.errorLogin = true;
  }
}
