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
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-maintainer-contacts',
  templateUrl: './maintainer-contacts.component.html',
  styleUrls: ['./maintainer-contacts.component.css']
})
export class MaintainerContactsComponent implements AfterViewInit , OnInit {

  closeResult: string;
  model: any = {};
  datas = [];
  contacts: Contact[];
  ArrayContacts: any = {};
  ArrayContactAlone: any = {};
  subtitle: string;

  idcontact :number;
  namecontact:string;
  descriptioncontact:string;
  phonecontact : string;
  addresscontact : string; 
  emailcontact:string;



  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }

  constructor(public router: Router, private _API: ProvidersService,
    private modalService: NgbModal,
    private modalService2: NgbModal) {}

  ngOnInit() {
    this._API.getContact()
    .subscribe(result => {
      this.contacts = result;
      console.log(result);
   
       var UserObj = Object.values (result);
       this.ArrayContacts = UserObj[0];
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
     
  this._API.addContact(this.model.name , this.model.description , this.model.phone , this.model.address , this.model.email ).subscribe(response => {
      console.log(response.statusText)
      if (response.statusText == "Bad Request"){
        
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al registrar grupo',
          type: 'warning',
          confirmButtonText: 'Ok',
          
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              location.reload();
              //this.router.navigate(['/login']);
             // this.router.navigateByUrl('home');
              
            }
          })
      }else{
        
        swal({
          title: 'Listo!',
          text: 'Nuevo grupo registrado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              //location.reload();
              this.contacts.push(this.model.name , this.model.description , this.model.phone , this.model.address , this.model.email)
              //location.reload();
              //this.router.navigateByUrl('/RefrshComponent', {skipLocationChange: true}).then(()=>
              
              
             // this.router.navigate(["maintainer-groups"]));
              //this.router.navigateByUrl('home');
            } 
              
            
          })
      }
    
  // this.groups = new Group[id,name,description,create_at,update_at];
  //  console.log( this.model.name ,this.model.description)

    
  })
}

update(): void {
     
  this._API.updateContact(this.idcontact, this.namecontact , this.descriptioncontact , this.phonecontact ,this.addresscontact , this.emailcontact ).subscribe(response => {


    if (response.statusText == "Bad Request"){
      // TODO: better job of transforming error for user consumption
      swal({
        title: 'Advertencia!',
        text: 'Error al Modificar Contacto',
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
            location.reload();
            this.contacts.push( this.model.idcontact, this.model.namecontact , this.model.descriptioncontact , this.model.phonecontact ,this.model.addresscontact , this.model.emailcontact);
            
          }
        })
    }

    
  // this.groups = new Group[id,name,description,create_at,update_at];
  //  console.log( this.model.name ,this.model.description)

    
  })
}

detail(ContactAlone: Contact): void {
  this._API.getContactId(ContactAlone.id).subscribe(data => {
   
   // this.datas = [groupAlone.id , groupAlone.name , groupAlone.description]
    this.idcontact = ContactAlone.id 
    this.namecontact= ContactAlone.name
    this.descriptioncontact = ContactAlone.description
    this.phonecontact= ContactAlone.phone
    this.addresscontact= ContactAlone.address
    this.emailcontact= ContactAlone.email



    console.log(ContactAlone.id , ContactAlone.name , ContactAlone.description , ContactAlone.phone , ContactAlone.address , ContactAlone.email);
  });
}

}
