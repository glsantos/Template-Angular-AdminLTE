import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login/login.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | boolean {

    if(this.loginService.usuarioEstaAutenticado()){

      let retorno = this.loginService.usuarioEstaAutenticado()
      
      return retorno;
    }

    this.router.navigate(['/login'])
    return false;
  }
}
