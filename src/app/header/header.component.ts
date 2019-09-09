import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrarMenu: boolean = false

  constructor(private loginService: LoginService) {

    this.ngOnInit()
  }

  ngOnInit() {

    this.loginService.mostrarMenuEmitter.subscribe(mostrar =>

      this.mostrarMenu = mostrar
    )
  }

  deslogar(){

    this.loginService.deslogado();

    /*
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons({
      title: 'Confirmar logout?',
      text: "!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, desejo sair do sistema!',
      cancelButtonText: 'Não!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        
        this.loginService.deslogado()
      } 
    })
    */
  }

}
