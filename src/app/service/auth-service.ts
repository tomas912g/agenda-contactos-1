import { inject, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from '../interfaces/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  logged:boolean = false;
  router = inject(Router);
  token : null|string = localStorage.getItem("token");
  revisionTokenInterval:number|undefined;

  ngOnInit(): void {
    // Si tengo sesion iniciada reviso que no este vencida
    if (this.token) {
      this.revisionTokenInterval = this.revisionToken()
    }
  }

  async login(loginData: LoginData){
    this.logged = true;
    const res = await fetch("https://agenda-api.somee.com/api/authentication/authenticate",
      {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginData)
      }
    )
    if(res.ok){
      this.token = await res.text()
      localStorage.setItem("token",this.token);
      this.router.navigate(["/"])
    }
    console.log("Respuesta del back",res); 
  }
  
  logout(){
    this.token = null;
    this.router.navigate(["/login"]);
  }

/** Revisa cada 10 minutos que el token siga siendo valido */
  revisionToken() {
    return setInterval(() => {
      if (this.token) {
        const base64Url = this.token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        const claims: { exp: number } = JSON.parse(jsonPayload);
        if (new Date(claims.exp * 1000) < new Date()) {
          this.logout()
        }
      }
    }, 600)
  }
}