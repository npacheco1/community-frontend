import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { LockComponent } from './lock/lock.component';

import { AuthenticationRoutes } from './authentication.routing';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ProvidersService } from "../providers.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    LockComponent
  ]
})
export class AuthenticationModule { }
