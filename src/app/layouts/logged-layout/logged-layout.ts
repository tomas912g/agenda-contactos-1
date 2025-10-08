import { Component,inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../service/auth-service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-logged-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './logged-layout.html',
  styleUrl: './logged-layout.scss'
})
export class LoggedLayout {

  authService = inject(AuthService);
    /** Abre modal de pregunta de cerrar sesión */
  openLogoutModal(){
    Swal.fire({
      title: "¿Desea cerrar sesión?",
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: false,
      cancelButtonText: "Cancelar",
      denyButtonText: `Cerrar sesión`
    }).then((result) => {
      if (result.isDenied) { //Reviso que haya clickeado en el botón rojo.
        this.authService.logout();
      }
    });
  }

}
