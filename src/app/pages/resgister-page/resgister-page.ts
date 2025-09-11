import { Component, inject } from '@angular/core';
import { UserService } from '../../service/user-service';
import { FormsModule } from '@angular/forms';
import { Spinner } from '../../component/spinner/spinner';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-resgister-page',
  imports: [RouterModule, FormsModule, Spinner],
  templateUrl: './resgister-page.html',
  styleUrl: './resgister-page.scss'
})
export class ResgisterPage {
  errorRegister = false;
  userService = inject(UserService)
  isLoading = false;
  router = inject(Router);

async register(form:any){
    console.log(form.value);
    this.errorRegister = false; //Elimino el mensaje de error
    // Hago validación extra sobre el formulario
    if(!form.value.email || 
      !form.value.password || 
      !form.value.password2 || 
      !form.value.firstName ||
      !form.value.lastName ||
      form.value.password !== form.value.password2){
      this.errorRegister = true;
      return
    }

    this.isLoading = true;
    const res = await this.userService.register(form.value);
    if(res.ok){
      this.router.navigate(["/login"])
    }
    this.isLoading = false;
    this.errorRegister = true;
  }
}