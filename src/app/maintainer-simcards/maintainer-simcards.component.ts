import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
//import {User} from './user';
import {RequestService} from '../services/request.service';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import { Simcard } from '../models/simcard.model';
import { FormGroup, FormControl } from '@angular/forms';
import { group } from '@angular/animations';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';

@Component({
  selector: 'app-maintainer-simcards',
  templateUrl: './maintainer-simcards.component.html',
  styleUrls: ['./maintainer-simcards.component.css']
})
export class MaintainerSimcardsComponent implements OnInit {
  
  modell;

  closeResult: string;
  model: any = {};
  datas = [];
  simcards: Simcard[];
  ArraySimcards: any = {};
  ArraySimAlone: any = {};
  subtitle: string;

  idsim :number;
  sim_companysim:string;
  sim_numbersim:string;
  purchase_datesim: any;
  install_datesim : any;

  constructor(public router: Router, private _API: ProvidersService,
    private modalService: NgbModal,
    private modalService2: NgbModal) { }

  ngOnInit() {
    this._API.getSim()
    .subscribe(result => {
      this.simcards = result;
      console.log(result);
   
       var UserObj = Object.values (result);
       this.ArraySimcards = UserObj[0];
     });
    }

  
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


ngAfterViewInit() {}

onSubmit(){
 //this.groups.push(this.group)
//console.log(this.coche); 
//this.group = new Group("","","","",""); 
}
add(): void {
     
  /*sim_company: string,
  sim_number: string,
  purchase_date: string,
  install_date: string,*/

  this._API.addSim(this.model.sim_company , this.model.sim_number ,  this.model.purchase_date, this.model.install_date ).subscribe(response => {
      console.log(response.statusText)
      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al registrar SIM',
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
          text: 'Nueva SIM registrada',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.simcards.push(this.model.sim_company , this.model.sim_number ,  this.model.purchase_date, this.model.install_date)
             
            }
          })
      }


    
  // this.groups = new Group[id,name,description,create_at,update_at];
  //  console.log( this.model.name ,this.model.description)

    
  })
}

 
update(): void {
     
  this._API.updateSim(this.idsim, this.sim_companysim , this.sim_numbersim, this.purchase_datesim, this.install_datesim).subscribe(response => {

    if (response.statusText == "Bad Request"){
      // TODO: better job of transforming error for user consumption
      swal({
        title: 'Advertencia!',
        text: 'Error al Modificar Tarjeta SIM',
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
        text: 'Tarjeta SIM Modificada',
        type: 'success',
        timer: 1000,
        onOpen: () => {
          swal.showLoading()
        }
        }).then((result) => {
          if (result.dismiss === swal.DismissReason.timer) {
            this.simcards.push(this.model.idsim, this.model.sim_companysim , this.model.sim_numbersim, this.model.purchase_datesim, this.model.install_datesim);              
          }
        })
    }
   
  // this.groups = new Group[id,name,description,create_at,update_at];
    console.log( this.model.namerol , this.model.descriptionrol)

    
  })
}
detail(simAlone: Simcard): void {
  this._API.getZoneId(simAlone.id).subscribe(data => {
   
   // this.datas = [groupAlone.id , groupAlone.name , groupAlone.description]
    this.idsim = simAlone.id 
    this.sim_companysim=simAlone.sim_company
    this.sim_numbersim = simAlone.sim_number
    this.purchase_datesim = simAlone.purchase_date
    this.install_datesim = simAlone.install_date
    


   // console.log(zoneAlone.id ,zoneAlone.name , zoneAlone.description);
  });
}

}
