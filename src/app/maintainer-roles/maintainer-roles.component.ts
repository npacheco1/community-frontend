import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
//import {User} from './user';
import {RequestService} from '../services/request.service';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import { Roles} from '../models/rol.model';
import { FormGroup, FormControl } from '@angular/forms';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';

@Component({
  selector: 'app-maintainer-roles',
  templateUrl: './maintainer-roles.component.html',
  styleUrls: ['./maintainer-roles.component.css']
})
export class MaintainerRolesComponent implements AfterViewInit , OnInit {
  
  closeResult: string;
  model: any = {};
  datas = [];
  roles: Roles[];
  ArrayRoles: any = {};
  subtitle: string;

  idrol :number;
  namerol:string;
  descriptionrol:string;

 
  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }

  constructor(public router: Router, private _API: ProvidersService,
    private modalService: NgbModal,
    private modalService2: NgbModal) { }

  ngOnInit() {
    
    this._API.getRol()
    .subscribe(result => {
      this.roles = result;
      console.log(result);
   
       var UserObj = Object.values (result);
       this.ArrayRoles = UserObj[0];
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

  add(): void {
     
    this._API.addRol(this.model.name , this.model.description ).subscribe(response => {
      
      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al registrar nuevo rol',
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
          text: 'Nuevo rol registrado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.roles.push(this.model.name  ,  this.model.description);
            }
          })
      }
  
     // this.roles.push(this.model.name  ,  this.model.description);
    // this.groups = new Group[id,name,description,create_at,update_at];
      console.log( this.model.name ,this.model.description)

      
    })
  }

  onSubmit(){}
  ngAfterViewInit() {}

  update(): void {
     
    this._API.updateRol(this.idrol, this.namerol , this.descriptionrol ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al Modificar Rol',
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
          text: 'Rol Modificado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.roles.push(this.model.idrol, this.model.namerol , this.model.descriptionrol);
            }
          })
      }
  
      
    // this.groups = new Group[id,name,description,create_at,update_at];
      console.log( this.model.namerol , this.model.descriptionrol)

      
    })
  }

  detail(rolAlone: Roles): void {
    this._API.getRolId(rolAlone.id).subscribe(data => {
     
     // this.datas = [groupAlone.id , groupAlone.name , groupAlone.description]
      this.idrol = rolAlone.id 
      this.namerol=rolAlone.name
      this.descriptionrol = rolAlone.description


      console.log(rolAlone.id ,rolAlone.name , rolAlone.description);
    });
}

}
