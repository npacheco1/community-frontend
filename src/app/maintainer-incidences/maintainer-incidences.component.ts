import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
//import {User} from './user';
import {RequestService} from '../services/request.service';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import { Group } from '../models/group.model';
import { FormGroup, FormControl } from '@angular/forms';
import { group } from '@angular/animations';
import {Contact} from '../models/contact.model';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import { Incidence } from '../models/incidence.model';

@Component({
  selector: 'app-maintainer-incidences',
  templateUrl: './maintainer-incidences.component.html',
  styleUrls: ['./maintainer-incidences.component.css']
})
export class MaintainerIncidencesComponent implements AfterViewInit , OnInit {
  closeResult: string;
  model: any = {};
  datas = [];
  incidence: Incidence[];
  ArrayGroups: any = {};
  ArrayIncidences: any = {};
  ArrayGroupAlone: any = {};
  subtitle: string;
  contacts: Contact[];
  ArrayContacts: any = {};
  checkedList=[];


  onCheckboxChange(option, event) {
    if(event.target.checked) {
      this.checkedList.push(option.id);
    } else {
      for(var i=0 ; i < this.ArrayContacts.length; i++) {
        if(this.checkedList[i] == option.id){
          this.checkedList.splice(i,1);
        }
      }
    }
    console.log(this.checkedList);
  }
  //checkboxes:any = {};
  //sensor.forEach(nombre => checkboxes[nombre]=false);
  //contacts.forEach(nombre => checkboxes[nombre]=false);

  get selectedOptions() { // right now: ['1','3']
  return this.ArrayContacts
            .filter(opt => opt.checked)
            .map(opt => opt.value)
}


tempArr: any = { "brands": [] };

   
  idgroup :number;
  namegroup:string;
  descriptiongroup:string;

  idincidence :number;
  nameincidence:string;
  descriptionincidence:string;
  contactsincidence:any;

  
  

  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
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

  constructor(public router: Router, private _API: ProvidersService,
    private modalService: NgbModal,
    private modalService2: NgbModal) {}
  ngOnInit() {
    this._API.getIncidence()
    .subscribe(result => {
      this.incidence = result;
      console.log(result);
   
       var UserObj = Object.values (result);
       this.ArrayIncidences = UserObj[0];
     });

     this._API.getContact()
    .subscribe(result => {
      this.contacts = result;
      console.log(result);
   
       var UserObj = Object.values (result);
       this.ArrayContacts = UserObj[0];
     });
  }
  ngAfterViewInit() {}


  add(): void { 
    
    
    this.model.contacts = this.checkedList

    this._API.addIncidence(this.model.name , this.model.description  , this.model.contacts).subscribe(response => {
        console.log(response.statusText)
        if (response.statusText == "Bad Request"){
          // TODO: better job of transforming error for user consumption
          swal({
            title: 'Advertencia!',
            text: 'Error al registrar Incidencia',
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
            text: 'Nuevo Incidencia registrada',
            type: 'success',
            timer: 1000,
            onOpen: () => {
              swal.showLoading()
            }
            }).then((result) => {
              if (result.dismiss === swal.DismissReason.timer) {
                console.log(this.model.contact_id)
                this.incidence.push(this.model.name  ,  this.model.description , this.model.contact_id)
                this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=>
                this.router.navigate(["maintainer-incidences"]));
              }
            })
        }
      
    // this.groups = new Group[id,name,description,create_at,update_at];
    //  console.log( this.model.name ,this.model.description)

      
    })
  }

  update(): void {
    this.contactsincidence = this.checkedList
     
    this._API.updateIncedence(this.idincidence, this.nameincidence , this.descriptionincidence  , this.contactsincidence).subscribe(response => {


      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al Modificar incidencia',
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
          text: 'Incidencia Modificada',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.incidence.push(this.model.idincidence, this.model.nameincidence , this.model.descriptionincidence, this.model.contactsincidence);
              
            }
          })
      }
  
      
    // this.groups = new Group[id,name,description,create_at,update_at];
    //  console.log( this.model.name ,this.model.description)

      
    })
  }

  detail(incidenceAlone: Incidence): void {
    this._API.getIncidenceId(incidenceAlone.id).subscribe(data => {
     
     // this.datas = [groupAlone.id , groupAlone.name , groupAlone.description]
      this.idincidence = incidenceAlone.id 
      this.nameincidence= incidenceAlone.name
      this.descriptionincidence = incidenceAlone.description
      this.contactsincidence = incidenceAlone.contacts

      console.log(incidenceAlone.id , incidenceAlone.name , incidenceAlone.description , incidenceAlone.contacts);
    });
}

}
