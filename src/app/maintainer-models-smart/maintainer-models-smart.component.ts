import { Component, OnInit } from '@angular/core';
import * as tableData from './smart-table-models';
import { LocalDataSource } from 'ng2-smart-table';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import {Model} from '../models/model.model';
@Component({
  selector: 'app-maintainer-models-smart',
  templateUrl: './maintainer-models-smart.component.html',
  styleUrls: ['./maintainer-models-smart.component.css']
})
export class MaintainerModelsSmartComponent implements OnInit {

  source: LocalDataSource;
  source2: LocalDataSource;
  model: any = {};
  datas = [];
  models: Model[];
  ArrayModels: any = {};
  closeResult: string;

  id: number
  name: string
  frecuency_gsm: string
  power_supply: string
  exit_relay: string
  weight :string
  outer_dimension : string
  humidity_range : string
  temperature_range : string
  


  constructor(public router: Router, private _API: ProvidersService,) { 
    this.source = new LocalDataSource(tableData.data); // create the source
  }
  //settings = tableData.settings;
  settings2 = tableData.settings2;

  ngOnInit() {
    this._API.getModel()
    .subscribe(result => {
      this.models = result;
      //console.log(result);
    // var contenido = {result};
       var UserObj = Object.values (result);
       this.ArrayModels = UserObj[0];
      // console.log(this.ArrayUsers)
       this.source2 = new LocalDataSource(this.ArrayModels)
 
      });
  }

  addRecord(event) {
     
    var data = { 
            "name": event.newData.name,
            "power_supply": event.newData.power_supply,
​​            "frecuency_gsm": event.newData.frecuency_gsm,
            "exit_relay": event.newData.exit_relay,
            "weight" : event.newData.weight,
            "outer_dimension" :event.newData.outer_dimension,
            "humidity_range" : event.newData.humidity_range,
            "temperature_range" : event.newData.temperature_range
                };

    this._API.addModel(
        data.name ,
        data.power_supply ,
        data.frecuency_gsm ,
        data.exit_relay ,
        data.weight ,
        data.outer_dimension ,
        data.humidity_range ,
        data.temperature_range
          ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al registrar Modelo',
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
          text: 'Nuevo Modelo registrado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.models.push(data.name ,
                data.power_supply ,
                data.frecuency_gsm ,
                data.exit_relay ,
                data.weight ,
                data.outer_dimension ,
                data.humidity_range ,
                data.temperature_range );     
              this.router.navigate(['/register-step2']);    
            }
          })
      }

    })
  }

  onEditConfirm(event){
    console.log('DDDDDD')
    console.log(event)
    
    var data = { 
      "id":event.newData.id,
      "name": event.newData.name,
      "power_supply": event.newData.power_supply,
​​      "frecuency_gsm": event.newData.frecuency_gsm,
      "exit_relay": event.newData.exit_relay,
      "weight" : event.newData.weight,
      "outer_dimension" :event.newData.outer_dimension,
      "humidity_range" : event.newData.humidity_range,
      "temperature_range" : event.newData.temperature_range
          };

      
  //  event.confirm.resolve(); 
    this._API.updateModel(
      data.id, 
      data.name ,
      data.power_supply ,
      data.frecuency_gsm ,
      data.exit_relay ,
      data.weight ,
      data.outer_dimension ,
      data.humidity_range ,
      data.temperature_range  ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al Modificar Modelo',
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
          text: 'Modelo Modificado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.models.push(data.id, 
                data.name ,
                data.power_supply ,
                data.frecuency_gsm ,
                data.exit_relay ,
                data.weight ,
                data.outer_dimension ,
                data.humidity_range ,
                data.temperature_range);
              
            }
          })
      }
  
    // this.groups = new Group[id,name,description,create_at,update_at];
     
  
      
    })
  
  }

}
