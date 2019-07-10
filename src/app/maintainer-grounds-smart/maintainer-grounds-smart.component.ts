import { Component, OnInit } from '@angular/core';

import * as tableData from './smart-table-grounds';
import { LocalDataSource } from 'ng2-smart-table';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import {Ground} from '../models/ground.model';
import {Zones} from '../models/zones.model';
import {TypeGrounds} from '../models/type-grounds.model';


@Component({
  selector: 'app-maintainer-grounds-smart',
  templateUrl: './maintainer-grounds-smart.component.html',
  styleUrls: ['./maintainer-grounds-smart.component.css']
})
export class MaintainerGroundsSmartComponent implements OnInit {
  
  source: LocalDataSource;
  source2: LocalDataSource;
  model: any = {};
  datas = [];
  grounds : Ground[];
  zones: Zones[];
  typegrounds: TypeGrounds[];
  ArrayGrounds: any = {};
  ArrayZones: any = {};
  ArrayTypeGrounds: any = {};
  closeResult: string;

  id: number
  name: string
  description: string
  zone_id : number
  tygr_id : number

 
 

  constructor(public router: Router, private _API: ProvidersService,) { 
    this.source = new LocalDataSource(tableData.data); // create the source
  }

   //settings = tableData.settings;
   settings2 = tableData.settings2;


  ngOnInit() {

    this._API.getGrounds()
    .subscribe(result => {
      this.grounds = result;
      //console.log(result);
    // var contenido = {result};
       var UserObj = Object.values (result);
       this.ArrayGrounds = UserObj[0];
      // console.log(this.ArrayUsers)
       this.source2 = new LocalDataSource(this.ArrayGrounds)
 
      });
  }

  addRecord(event) {
     
    var data = { 

     
            "name": event.newData.name,
            "description": event.newData.description,
​​            "zone_id": event.newData.zone_id,
            "tygr_id": event.newData.tygr_id,
            };



    this._API.addGround(
        data.name ,
        data.description ,
        data.zone_id,
        data.tygr_id
         
        
        
          ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al registrar Zona',
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
          text: 'Nuevo Zona registrada',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
               this.grounds.push(  data.name ,
                data.description ,
                data.zone_id,
                data.tygr_id
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
      "description": event.newData.description,
​​      "zone_id": event.newData.zone_id,
      "tygr_id": event.newData.tygr_id,
      };
     
  //  event.confirm.resolve(); 
    this._API.updateGround(
     
      data.id,
      data.name ,
      data.description ,
      data.zone_id,
      data.tygr_id  

      ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al Modificar Zona',
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
          text: 'Zona Modificada',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.grounds.push(  data.id,
                                  data.name ,
                                  data.description ,
                                  data.zone_id,
                                  data.tygr_id    );
                                  
              this.router.navigate(['/maintainer-groups-smart']);
              window.location.reload();
  
            }
          })
      }
  
    // this.groups = new Group[id,name,description,create_at,update_at];
     
  
      
    })
  
  }

}
