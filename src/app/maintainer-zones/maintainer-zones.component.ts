import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
//import {User} from './user';
import {RequestService} from '../services/request.service';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import { Zones } from '../models/zones.model';
import { Group } from '../models/group.model';
import { FormGroup, FormControl } from '@angular/forms';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';


@Component({
  selector: 'app-maintainer-zones',
  templateUrl: './maintainer-zones.component.html',
  styleUrls: ['./maintainer-zones.component.css']
})
export class MaintainerZonesComponent implements AfterViewInit {
  
  closeResult: string;
  model: any = {};
  datas = [];
  zones: Zones[];
  ArrayZones: any = {};
  subtitle: string;
  groups: Group[];
  ArrayGroups: any = {};
 
  idzone :number;
  namezone:string;
  descriptionzone:string;
  grou_idzone: string;
  
  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }

  constructor(public router: Router, private _API: ProvidersService,
    private modalService: NgbModal,
    private modalService2: NgbModal) { }

  ngOnInit() {
    this._API.getZones()
    .subscribe(result => {
      this.zones = result;
      console.log(result);
    
       var UserObj = Object.values (result);
       this.ArrayZones = UserObj[0];
     });

     this._API.getGroup()
    .subscribe(result => {
      this.groups = result;
      console.log(result);
   
       var UserObj = Object.values (result);
       this.ArrayGroups = UserObj[0];
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
     
    this._API.addZone(this.model.name , this.model.description , this.model.grou_id).subscribe(response => {

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
          text: 'Nueva Zona registrada',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.zones.push(this.model.name  ,  this.model.description , this.model.grou_id);              
            }
          })
      }
  
     // this.zones.push(this.model.name  ,  this.model.description , this.model.grou_id);
    // this.groups = new Group[id,name,description,create_at,update_at];
      console.log( this.model.name ,this.model.description , this.model.grou_id)

      
    })
  }

  update(): void {
     
    this._API.updateZone(this.idzone, this.namezone , this.descriptionzone, this.grou_idzone ).subscribe(response => {

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
              this.zones.push(this.model.idzone, this.model.namezone , this.model.descriptionzone, this.model.grou_idzone);              
            }
          })
      }
     
    // this.groups = new Group[id,name,description,create_at,update_at];
      console.log( this.model.namerol , this.model.descriptionrol)

      
    })
  }

  detail(zoneAlone: Zones): void {
    this._API.getZoneId(zoneAlone.id).subscribe(data => {
     
     // this.datas = [groupAlone.id , groupAlone.name , groupAlone.description]
      this.idzone = zoneAlone.id 
      this.namezone=zoneAlone.name
      this.descriptionzone = zoneAlone.description
      this.grou_idzone = zoneAlone.grou_id


      console.log(zoneAlone.id ,zoneAlone.name , zoneAlone.description);
    });
}

}
