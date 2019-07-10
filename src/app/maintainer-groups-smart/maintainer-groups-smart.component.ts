import { Component, OnInit } from '@angular/core';
import * as tableData from './smart-data-groups';
import { LocalDataSource } from 'ng2-smart-table';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import {Group} from '../models/group.model';

@Component({
  selector: 'app-maintainer-groups-smart',
  templateUrl: './maintainer-groups-smart.component.html',
  styleUrls: ['./maintainer-groups-smart.component.css']
})
export class MaintainerGroupsSmartComponent implements OnInit {

  source: LocalDataSource;
  source2: LocalDataSource;
  model: any = {};
  datas = [];
  groups: Group[];
  ArrayGroups: any = {};
  closeResult: string;

  id :number;
  name:string;
  description:string;
  user_id :string;

  constructor(public router: Router, private _API: ProvidersService,) { 
    this.source = new LocalDataSource(tableData.data); // create the source
  }
  //settings = tableData.settings;
  settings2 = tableData.settings2;

  ngOnInit() {

    this._API.getGroup()
    .subscribe(result => {
      this.groups = result;
      //console.log(result);
    // var contenido = {result};
       var UserObj = Object.values (result);
       this.ArrayGroups = UserObj[0];
      // console.log(this.ArrayUsers)
       this.source2 = new LocalDataSource(this.ArrayGroups)
       
    


      });
  }


  addRecord(event) {
     
    var data = { 
            "name": event.newData.name,
​​            "description": event.newData.description,
            "user_id": event.newData.user_id

​​            };

    this._API.addGroup(data.name ,data.description  ,data.user_id ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al registrar Grupo',
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
          text: 'Nuevo Grupo registrado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.groups.push(data.name ,data.description );     
              this.router.navigate(['/register-step2']);    
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
                "user_id": event.newData.user_id
    ​​           
    };
      console.log(data)
      console.log (data.id) 
  //  event.confirm.resolve(); 
    this._API.updateGroup(data.id, data.name ,data.description , data.user_id ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al Modificar Grupo',
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
          text: 'Grupo Modificado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.groups.push(data.id, data.name , data.description);
              this.router.navigate(['/maintainer-groups-smart']);
              window.location.reload();
  
            }
          })
      }
  
    // this.groups = new Group[id,name,description,create_at,update_at];
     
  
      
    })
  
  }

  

}
