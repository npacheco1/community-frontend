import { Component, OnInit } from '@angular/core';

import * as tableData from './smart-table-simcard';
import { LocalDataSource } from 'ng2-smart-table';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import {Simcard} from '../models/simcard.model';

@Component({
  selector: 'app-maintainer-simcards-smart',
  templateUrl: './maintainer-simcards-smart.component.html',
  styleUrls: ['./maintainer-simcards-smart.component.css']
})
export class MaintainerSimcardsSmartComponent implements OnInit {

  source: LocalDataSource;
  source2: LocalDataSource;
  model: any = {};
  datas = [];
  simcards: Simcard[];
  ArraySimcard: any = {};
  closeResult: string;

  id: number
  sim_company: string
  sim_number: string
  purchase_date: Date
  install_date: string

  constructor(public router: Router, private _API: ProvidersService,) { 
    this.source = new LocalDataSource(tableData.data); // create the source
  }

   //settings = tableData.settings;
   settings2 = tableData.settings2;


  ngOnInit() {
    this._API.getSim()
    .subscribe(result => {
      this.simcards = result;
      //console.log(result);
    // var contenido = {result};
       var UserObj = Object.values (result);
       this.ArraySimcard = UserObj[0];
      // console.log(this.ArrayUsers)
       this.source2 = new LocalDataSource(this.ArraySimcard)
 
      });
  }

  addRecord(event) {
     
    var data = { 
            "sim_company": event.newData.sim_company,
            "sim_number": event.newData.sim_number,
​​            "purchase_date": event.newData.purchase_date,
            "install_date": event.newData.install_date,
           
                };

    this._API.addSim(
        data.sim_company ,
        data.sim_number ,
        data.purchase_date ,
        data.install_date 
        
          ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al registrar Tarjeta Sim',
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
          text: 'Nuevo Tarjeta sim registrada',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
               this.simcards.push(data.sim_company ,
                data.sim_number ,
                data.purchase_date ,
                data.install_date 
               );     
              this.router.navigate(['/register-step2']);    
            }
          })
      }

    })
  }


  onEditConfirm(event){
    

    var data = { 
            "id": event.newData.id,
            "sim_company": event.newData.sim_company,
            "sim_number": event.newData.sim_number,
​​            "purchase_date": event.newData.purchase_date,
            "install_date": event.newData.install_date,
           
                };
      console.log(data)
      console.log (data.id) 
  //  event.confirm.resolve(); 
    this._API.updateSim(
      data.id,  data.sim_company ,
      data.sim_number ,
      data.purchase_date ,
      data.install_date   
      ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al Modificar Tarjeta Sim',
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
          text: 'Tarjeta Sim Modificada',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.simcards.push(data.id,  data.sim_company ,
                data.sim_number ,
                data.purchase_date ,
                data.install_date   );
              this.router.navigate(['/maintainer-groups-smart']);
              window.location.reload();
  
            }
          })
      }
  
    // this.groups = new Group[id,name,description,create_at,update_at];
     
  
      
    })
  
  }

}
