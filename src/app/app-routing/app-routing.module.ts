import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginGuard } from '../guards/login.guard';
import { HomeComponent } from '../home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, },
      { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
      { path: '**', redirectTo: 'home'}
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
