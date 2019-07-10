import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
//import {User} from './user';
import {RequestService} from '../services/request.service';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import { Zones } from '../models/zones.model';
//import { Dispositive } from '../models/dispositive.model';
import { FormGroup, FormControl } from '@angular/forms';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import { Dispositive } from '../models/dispositive.model';
import { Action } from '../models/action.model';
import { User } from '../maintainer-users/user';

@Component({
  selector: 'app-maintainer-actions',
  templateUrl: './maintainer-actions.component.html',
  styleUrls: ['./maintainer-actions.component.css']
})
export class MaintainerActionsComponent implements OnInit {

  closeResult: string;
  model: any = {};
  datas = [];
  login: User[]
  actions: Action[];
  ArrayActions: any = {};
  subtitle: string;
  dispositives: Dispositive[];
  ArrayDispositives: any = {};
 
  idaction :number;
  nameaction:string;
  valueaction:string;
  dispositive_idaction:number;
  

  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }

  constructor(public router: Router, private _API: ProvidersService,
    private modalService: NgbModal,
    private modalService2: NgbModal) { }

  ngOnInit() {
    
     this._API.getUserLoggedIn('','');
       console.log(this._API.getUserLoggedIn('',''))
     

  console.log(this._API.usernameLogin);

    this._API.getActions()
    .subscribe(result => {
      this.actions = result;
      console.log(result);
    
       var UserObj = Object.values (result);
       this.ArrayActions = UserObj[0];
     });

     this._API.getDispositive()
    .subscribe(result => {
      this.dispositives = result;
      console.log(result);
   
       var UserObj = Object.values (result);
       this.ArrayDispositives = UserObj[0];
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
     
    this._API.addAction(this.model.name  , this.model.value, this.model.dispositive_id).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al registrar Accion',
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
          text: 'Nueva Accion registrada',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.actions.push(this.model.name  , this.model.value ,this.model.dispositive_id);              
            }
          })
      }
  
     // this.zones.push(this.model.name  ,  this.model.description , this.model.grou_id);
    // this.groups = new Group[id,name,description,create_at,update_at];
      console.log( this.model.name ,this.model.description , this.model.grou_id)

      
    })
  }

  update(): void {
     
    this._API.updateAction(this.idaction, this.nameaction , this.valueaction, this.dispositive_idaction ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al modificar Terreno',
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
          text: ' Terreno Modificado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.actions.push(this.model.name  ,  this.model.value ,  this.model.dispositive_id );
              
            }
          })
      }
  
      //this.zones.push(this.model.idground, this.model.ameground , this.model.descriptionground, this.model.zone_idground, this.model.tygr_idground);
    // this.groups = new Group[id,name,description,create_at,update_at];
      console.log( this.model.namerol , this.model.descriptionrol)

      
    })
  }

  detail(actionAlone: Action): void {
    this._API.getActionId(actionAlone.id).subscribe(data => {
     
     // this.datas = [groupAlone.id , groupAlone.name , groupAlone.description]
      this.idaction = actionAlone.id 
      this.nameaction=actionAlone.name
      this.valueaction = actionAlone.value
      this.dispositive_idaction = actionAlone.dispositive_id

     

     // console.log(zoneAlone.id ,zoneAlone.name , zoneAlone.description);
    });
}

}
