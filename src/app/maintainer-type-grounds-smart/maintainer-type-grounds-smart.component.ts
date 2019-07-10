import { Component, OnInit } from '@angular/core';

import * as tableData from './smart-data-type-grounds';
import { LocalDataSource } from 'ng2-smart-table';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import {TypeGrounds} from '../models/type-grounds.model';

@Component({
  selector: 'app-maintainer-type-grounds-smart',
  templateUrl: './maintainer-type-grounds-smart.component.html',
  styleUrls: ['./maintainer-type-grounds-smart.component.css']
})
export class MaintainerTypeGroundsSmartComponent implements OnInit {

  source: LocalDataSource;
  source2: LocalDataSource;
  model: any = {};
  datas = [];
  typeGrounds: TypeGrounds[];
  ArrayTypeGrounds: any = {};
  closeResult: string;

  id :number;
  name:string;
  description:string;

  constructor(public router: Router, private _API: ProvidersService,) { 
    this.source = new LocalDataSource(tableData.data); // create the source
  }
  settings2 = tableData.settings2;


  ngOnInit() {
    this._API.getTypeGrounds()
    .subscribe(result => {
      this.typeGrounds = result;
      //console.log(result);
    // var contenido = {result};
       var UserObj = Object.values (result);
       this.ArrayTypeGrounds = UserObj[0];
      // console.log(this.ArrayUsers)
       this.source2 = new LocalDataSource(this.ArrayTypeGrounds)

      });

  }


  addRecord(event) {
     
    var data = { 
            "name": event.newData.name,
​​            "description": event.newData.description
​​            };

    this._API.addTypeGround(data.name ,data.description  ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al registrar tipo de terreno',
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
          text: 'Nuevo tipo de terreno registrado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.typeGrounds.push(data.name ,data.description );     
              this.router.navigate(['/register-step2']);    
            }
          })
      }

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
    this._API.updateTypeGround(data.id, data.name ,data.description  ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al Modificar Tipo de terreno',
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
          text: 'Tipo de terreno Modificado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.typeGrounds.push(data.id, data.name , data.description);
              this.router.navigate(['/maintainer-groups-smart']);
              window.location.reload();
  
            }
          })
      }
  
    // this.groups = new Group[id,name,description,create_at,update_at];
     
  
      
    })
  
  }

}
