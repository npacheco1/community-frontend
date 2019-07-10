import { Component, OnInit } from '@angular/core';

import * as tableData from './smart-table-actions';
import { LocalDataSource } from 'ng2-smart-table';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import {Action} from '../models/action.model';

@Component({
  selector: 'app-maintainer-actions-smart',
  templateUrl: './maintainer-actions-smart.component.html',
  styleUrls: ['./maintainer-actions-smart.component.css']
})
export class MaintainerActionsSmartComponent implements OnInit {
  source: LocalDataSource;
  source2: LocalDataSource;
  model: any = {};
  datas = [];
  actions: Action[];
  ArrayActions: any = {};
  closeResult: string;

  id: number
  name: string
  value: string
  dispositive_id: number
 

  constructor(public router: Router, private _API: ProvidersService,) { 
    this.source = new LocalDataSource(tableData.data); // create the source
  }

   //settings = tableData.settings;
   settings2 = tableData.settings2;


  ngOnInit() {

    this._API.getActions()
    .subscribe(result => {
      this.actions = result;
      //console.log(result);
    // var contenido = {result};
       var UserObj = Object.values (result);
       this.ArrayActions = UserObj[0];
      // console.log(this.ArrayUsers)
       this.source2 = new LocalDataSource(this.ArrayActions)
 
      });
  }

  addRecord(event) {
     
    var data = { 
            "name": event.newData.name,
            "value": event.newData.value,
​​            "dispositive_id": event.newData.dispositive_id,
            };



    this._API.addAction(
        data.name ,
        data.value ,
        data.dispositive_id 
        
        
          ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al registrar Terreno',
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
          text: 'Nuevo Terreno registrado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
               this.actions.push(  data.name ,
                data.value ,
                data.dispositive_id 
               );     
         
            }
          })
      }

    })
  }
  
  onEditConfirm(event){
    

    var data = { 
            "id": event.newData.id,
            "name": event.newData.name,
            "value": event.newData.value,
​​            "dispositive_id": event.newData.dispositive_id,
           
                };
      console.log(data)
      console.log (data.id) 
  //  event.confirm.resolve(); 
    this._API.updateAction(
      data.id, data.name ,
      data.value ,
      data.dispositive_id   
      ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al Modificar Terreno',
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
          text: 'Terreno Modificado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.actions.push( data.id, data.name ,
                data.value ,
                data.dispositive_id    );
              this.router.navigate(['/maintainer-groups-smart']);
              window.location.reload();
  
            }
          })
      }
  
    // this.groups = new Group[id,name,description,create_at,update_at];
     
  
      
    })
  
  }

}
