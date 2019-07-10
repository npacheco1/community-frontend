import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Providers, ProvidersService } from "../../providers.service";
import swal from 'sweetalert2';
import { Users } from '../../models/user.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform = true;
  recoverform = false;
  model: any = {};
  datas = [];
  users: Users[];

  constructor(
    public router: Router, private _API: ProvidersService
  ) { }

  ngOnInit() {
    this.allUsers();
  }

  showRecoverForm() {

  	this.loginform = !this.loginform;
  	this.recoverform = !this.recoverform;
  }

  allUsers(): void {
    this._API.getUsers()
      .subscribe(users => {
        console.log(users);
        this.users = users; 

      });
  }

  onSubmit(): void {
      this._API.login(this.model.email, this.model.password).subscribe(response => {

       // environment.userLogin = this.model;
       if( this.model.email){
          environment.mailLogin = this.model.email;
       }
        
 
        if (response.ok == false){
          // TODO: better job of transforming error for user consumption
          swal({
            title: 'Advertencia!',
            text: 'Credenciales invalidas',
            type: 'warning',
            confirmButtonText: 'Ok',
            }).then((result) => {
              if (result.dismiss === swal.DismissReason.timer) {
                //this.router.navigate(['/login']);
              }
            })
        }else{
          swal({
            title: 'Listo!',
            text: 'Te has logueado correctamente',
            type: 'success',
            timer: 1000,
            onOpen: () => {
              swal.showLoading()
            }
            }).then((result) => {
              if (result.dismiss === swal.DismissReason.timer) {
                this.router.navigate(['/starter']);
                
              }
            })
        }
      })
  }
}
