import { Component, OnInit } from '@angular/core';
import * as tableData from './smart-data-table';
import { LocalDataSource } from 'ng2-smart-table';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';

import { User } from '../maintainer-users/user';
import { Users, Roles } from '../models/user.model';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import {Zones} from '../models/zones.model';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css']
})
export class SmartTableComponent implements OnInit {

  source: LocalDataSource;
  source2: LocalDataSource;
  model: any = {};
  datas = [];
  users: Users[];
  ArrayUsers: any = {};
  roles: Roles[];
  ArrayRoles: any = {};
  closeResult: string;
  zones : Zones[];
  ArrayZones: any = {};


  id :number;
  name:string;
  address:string;
  phone :string;
  rut : string;
  email: string;
  role_id : number;
  zone_id : number;
  password : string;

  subtitle: string;

  constructor(public router: Router, private _API: ProvidersService,) {

    this.source = new LocalDataSource(tableData.data); // create the source
   // this.source2 = new LocalDataSource(tableData.data); // create the source  
  }
  settings = tableData.settings;
  settings2 = tableData.settings2;

  ngOnInit() {

    this._API.getUsers()
    .subscribe(result => {
      this.users = result;
      //console.log(result);
    // var contenido = {result};
       var UserObj = Object.values (result);
       this.ArrayUsers = UserObj[0];
      // console.log(this.ArrayUsers)
       this.source2 = new LocalDataSource(this.ArrayUsers)
       
    


      });

      this._API.getRol()
    .subscribe(result => {
      this.roles = result;
      console.log(result);
    // var contenido = {result};
       var UserObj = Object.values (result);
       this.ArrayRoles = UserObj[0];
       console.log(this.ArrayRoles)
       this.source = new LocalDataSource(this.ArrayRoles)
       console.log(this.ArrayRoles)

      });

     
      
  }

  addRecord(event) {
     
    var data = { 
             "address": event.newData.address,
​​            "email": event.newData.email,
​​             "name": event.newData.name,
​​            "phone": event.newData.phone,
​​            "role_id": event.newData.role_id,
            "zone_id":event.newData.zone_id,
            "rut":event.newData.rut,
            "password":event.newData.password,
};

    this._API.addUser(data.name ,data.address ,data.phone , data.rut ,data.email  ,data.role_id , data.zone_id, data.password ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al  registrar Usuario',
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
          text: 'Nuevo Usuario registrado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.users.push(data.name ,data.address ,data.phone , data.rut ,data.email  ,data.role_id , data.zone_id, data.password);           
            }
          })
      }
  
     // this.users.push(this.model.name , this.model.rut, this.model.email , this.model.address , this.model.phone ,  this.model.role_id , this.model.password);
    // this.groups = new Group[id,name,description,create_at,update_at];
     // console.log( this.model.name , this.model.rut, this.model.email , this.model.address , this.model.phone ,  this.model.role_id , this.model.password)

      
    })
  }

  onEditConfirm(event){
    console.log('DDDDDD')
    console.log(event)
    var data = { "id" :event.newData.id,
                "address": event.newData.address,
    ​​            "email": event.newData.email,
    ​​             "name": event.newData.name,
    ​​            "phone": event.newData.phone,
    ​​            "role_id": event.newData.role_id,
                "zone_id":event.newData.zone_id,
                "rut":event.newData.rut,
                "password":event.newData.password,
    };
      console.log(data)
      console.log (data.id) 
  //  event.confirm.resolve(); 
    this._API.updateUser(data.id, data.name , data.address, data.phone, data.rut ,data.email , data.role_id , data.zone_id ,data.password  ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al Modificar Usuario',
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
          text: 'Usuario Modificado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.users.push(data.id, data.name , data.address, data.phone, data.rut , data.email , data.role_id , data.zone_id,  data.password );
  
            }
          })
      }
  
    // this.groups = new Group[id,name,description,create_at,update_at];
     
  
      
    })
  
  }

  
  onSaveConfirm(event):void { 

    console.log(event)
    

  }

  

}
