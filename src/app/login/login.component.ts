import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resultado: any
  isLogando: boolean = false

  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }

  login(login) {

    /*
    this.usuarioLogin.idUsuario = login.usuario;
    this.usuarioLogin.dsSenha = login.senha;
    this.logar(this.usuarioLogin)
    */
    
     this.loginService.logado("dev");
     sessionStorage.setItem('usuario-logado', "dev");
  }
}
