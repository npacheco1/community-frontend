import { Component, OnInit } from '@angular/core';
import * as tableData from './smart-data-roles';
import { LocalDataSource } from 'ng2-smart-table';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import {Roles} from '../models/rol.model';

@Component({
  selector: 'app-maintainer-roles-smart',
  templateUrl: './maintainer-roles-smart.component.html',
  styleUrls: ['./maintainer-roles-smart.component.css']
})
export class MaintainerRolesSmartComponent implements OnInit {
  
  source: LocalDataSource;
  source2: LocalDataSource;
  model: any = {};
  datas = [];
  roles: Roles[];
  ArrayRoles: any = {};
  closeResult: string;

  id :number;
  name:string;
  description:string;

  constructor(public router: Router, private _API: ProvidersService,) { 
    this.source = new LocalDataSource(tableData.data); // create the source
  }
  //settings = tableData.settings;
  settings2 = tableData.settings2;

  ngOnInit() {

    this._API.getRol()
    .subscribe(result => {
      this.roles = result;
      //console.log(result);
    // var contenido = {result};
       var UserObj = Object.values (result);
       this.ArrayRoles = UserObj[0];
      // console.log(this.ArrayUsers)
       this.source2 = new LocalDataSource(this.ArrayRoles)
       
    


      });
  }


  addRecord(event) {
     
    var data = { 
             
​​             "name": event.newData.name,
​​            "description": event.newData.description
​​            
};

    this._API.addRol(data.name ,data.description  ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al registrar Rol',
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
              this.roles.push(data.name ,data.description );           
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
                "name": event.newData.name,
    ​​            "description": event.newData.description,
    ​​           
    };
      console.log(data)
      console.log (data.id) 
  //  event.confirm.resolve(); 
    this._API.updateRol(data.id, data.name ,data.description  ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al Modificar Rol',
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
          text: 'Rol Modificado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.roles.push(data.id, data.name , data.description);
  
            }
          })
      }
  
    // this.groups = new Group[id,name,description,create_at,update_at];
     
  
      
    })
  
  }

}
