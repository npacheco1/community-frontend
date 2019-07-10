import { Component, OnInit } from '@angular/core';

import * as tableData from './smart-table-zones';
import { LocalDataSource } from 'ng2-smart-table';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import {Zones} from '../models/zones.model';

@Component({
  selector: 'app-maintainer-zones-smart',
  templateUrl: './maintainer-zones-smart.component.html',
  styleUrls: ['./maintainer-zones-smart.component.css']
})
export class MaintainerZonesSmartComponent implements OnInit {

  source: LocalDataSource;
  source2: LocalDataSource;
  model: any = {};
  datas = [];
  zones: Zones[];
  ArrayZones: any = {};
  closeResult: string;

  id: number
  name: string
  description: string
  grou_id: number
 

  constructor(public router: Router, private _API: ProvidersService,) { 
    this.source = new LocalDataSource(tableData.data); // create the source
  }

   //settings = tableData.settings;
   settings2 = tableData.settings2;

  ngOnInit() {

    this._API.getZones()
    .subscribe(result => {
      this.zones = result;
      //console.log(result);
    // var contenido = {result};
       var UserObj = Object.values (result);
       this.ArrayZones = UserObj[0];
      // console.log(this.ArrayUsers)
       this.source2 = new LocalDataSource(this.ArrayZones)
 
      });
      
  }

  addRecord(event) {
     
    var data = { 
            "name": event.newData.name,
            "description": event.newData.description,
​​            "grou_id": event.newData.grou_id,
            };

    this._API.addZone(
        data.name ,
        data.description ,
        data.grou_id 
        
        
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
               this.zones.push( data.name ,
                data.description ,
                data.grou_id 
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
​​            "grou_id": event.newData.grou_id,
           
                };
      console.log(data)
      console.log (data.id) 
  //  event.confirm.resolve(); 
    this._API.updateZone(
      data.id, data.name ,
      data.description ,
      data.grou_id   
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
              this.zones.push(data.id, data.name ,
                data.description ,
                data.grou_id   );
              this.router.navigate(['/maintainer-groups-smart']);
              window.location.reload();
  
            }
          })
      }
  
    // this.groups = new Group[id,name,description,create_at,update_at];
     
  
      
    })
  
  }

}
