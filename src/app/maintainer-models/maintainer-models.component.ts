import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
//import {User} from './user';
import {RequestService} from '../services/request.service';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import { Model } from '../models/model.model';
import { FormGroup, FormControl } from '@angular/forms';
import { group } from '@angular/animations';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';


@Component({
  selector: 'app-maintainer-models',
  templateUrl: './maintainer-models.component.html',
  styleUrls: ['./maintainer-models.component.css']
})
export class MaintainerModelsComponent implements AfterViewInit , OnInit {

  closeResult: string;
  model: any = {};
  datas = [];
  models: Model[];
  ArrayModels: any = {};
  ArrayModelAlone: any = {};
  subtitle: string;


  

  idmodel :number;
  namemodel:string;
  frecuency_gsmmodel:string;
  power_supplymodel: string;
  exit_relaymodel : string;
  weightmodel : string;
  outer_dimensionmodel : string;
  humidity_rangemodel : string;
  temperature_rangemodel : string







  constructor(public router: Router, private _API: ProvidersService,
    private modalService: NgbModal,
    private modalService2: NgbModal) { }

  ngOnInit() {
    this._API.getModel()
    .subscribe(result => {
      this.models = result;
      console.log(result);
   
       var UserObj = Object.values (result);
       this.ArrayModels = UserObj[0];
     });
  }

  ngAfterViewInit() {}

  onSubmit(){}

  open2(content) {
    this.modalService.open(content).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  add(): void {
     
    this._API.addModel(this.model.name , this.model.frecuency_gsm , this.model.power_supply ,this.model.exit_relay ,this.model.weight ,this.model.outer_dimension ,this.model.humidity_range ,this.model.temperature_range  ).subscribe(response => {
        console.log(response.statusText)
        if (response.statusText == "Unknown Error"){
          // TODO: better job of transforming error for user consumption
          swal({
            title: 'Advertencia!',
            text: 'Error al registrar modelo',
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
            text: 'Nuevo modelo registrado',
            type: 'success',
            timer: 1000,
            onOpen: () => {
              swal.showLoading()
            }
            }).then((result) => {
              if (result.dismiss === swal.DismissReason.timer) {
                this.models.push(this.model.name , this.model.frecuency_gsm , this.model.power_supply ,this.model.exit_relay ,this.model.weight ,this.model.outer_dimension ,this.model.humidity_range ,this.model.temperature_range )
                this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=>
                this.router.navigate(["maintainer-models"]));
              }
            })
        }
      
    
      
    })
  }

  update(): void {
     
    this._API.updateModel(this.idmodel, this.namemodel , this.frecuency_gsmmodel , this.power_supplymodel ,this.exit_relaymodel ,this.weightmodel ,this.outer_dimensionmodel ,this.humidity_rangemodel ,this.temperature_rangemodel ).subscribe(response => {


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
              this.models.push( this.model.idmodel, this.model.namemodel , this.model.frecuency_gsmmodel , this.model.power_supplymodel ,this.model.exit_relaymodel ,this.model.weightmodel ,this.model.outer_dimensionmodel ,this.model.humidity_rangemodel ,this.model.temperature_rangemodel);
              
             }
           })
        }
     })
   }



   /*idmodel :number;
   namemodel:string;
   frecuency_gsmmodel:string;
   power_supplymodel: string;
   exit_relaymodel : string;
   weightmodel : string;
   outer_dimensionmodel : string;
   humidity_rangemodel : string;
   temperature_rangemodel : string*/

   detail(modelAlone: Model): void {
    this._API.getGroupId(modelAlone.id).subscribe(data => {
     
     // this.datas = [groupAlone.id , groupAlone.name , groupAlone.description]
      this.idmodel = modelAlone.id 
      this.namemodel= modelAlone.name
      this.frecuency_gsmmodel = modelAlone.frecuency_gsm
      this.power_supplymodel = modelAlone.power_supply
      this.exit_relaymodel = modelAlone.exit_relay 
      this.weightmodel = modelAlone.weight
      this.outer_dimensionmodel = modelAlone.outer_dimension
      this.humidity_rangemodel = modelAlone.humidity_range
      this.temperature_rangemodel = modelAlone.temperature_range

      //console.log(groupAlone.id , groupAlone.name , groupAlone.description);
    });
}
}
