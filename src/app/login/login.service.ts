import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { AUDIT_API } from '../api/app.api';
import swal from 'sweetalert2';

@Injectable()
export class LoginService {

  nomeUsuario: any
  resultado: any

  private usuarioAutenticado: boolean = false
  mostrarMenuEmitter = new EventEmitter<boolean>()

  constructor(private router: Router, private http: HttpClient) { }


  usuarioEstaAutenticado() {
    if (this.usuarioAutenticado == true && sessionStorage.getItem("nmUsuario")) {

      return true;
    }
  }

  logado(user: any) {

    sessionStorage.setItem("nmUsuario", user.nmUsuario);

    this.mostrarMenuEmitter.emit(true)
    this.usuarioAutenticado = true
    this.router.navigate(['/'])
    /*
    if (user.idNivelAcesso == 99) {

      sessionStorage.setItem("nmUsuario", user.nmUsuario);

      this.mostrarMenuEmitter.emit(true)
      this.mostrarUsuarioEmitter.emit(user);
      this.usuarioAutenticado = true
      this.router.navigate(['/'])
    } else {

      this.deslogado();
      swal('Ops!', 'Usuário ou senha incorretas!', 'error')
    }
    */
  }

  deslogado() {

    sessionStorage.clear();

    this.mostrarMenuEmitter.emit(false)
    this.usuarioAutenticado = false
    this.router.navigate(['/login'])  
  }

}
