import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
//import {User} from './user';
import {RequestService} from '../services/request.service';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import {Ground } from '../models/ground.model';
import {Zones} from '../models/zones.model';
import {TypeGrounds} from '../models/type-grounds.model';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';

@Component({
  selector: 'app-maintainer-grounds',
  templateUrl: './maintainer-grounds.component.html',
  styleUrls: ['./maintainer-grounds.component.css']
})
export class MaintainerGroundsComponent implements AfterViewInit {
  
  model: any = {};
  datas = [];
  grounds: Ground[];
  ArrayGrounds: any = {};
  zones: Zones[];
  ArrayZones: any = {};
  subtitle: string;
  typegrounds: TypeGrounds[];
  ArrayTypeGrounds: any = {};
  closeResult: string;

  idground :number;
  nameground:string;
  descriptionground:string;
  zone_idground :number;
  tygr_idground: number;

  

  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }

  constructor(public router: Router, private _API: ProvidersService,
    private modalService: NgbModal,
    private modalService2: NgbModal) { }

  ngOnInit() {

    this._API.getGrounds()
    .subscribe(result => {
      this.grounds = result;
      console.log(result);
       var UserObj = Object.values (result);
       this.ArrayGrounds = UserObj[0];
      
    
    });


    this._API.getZones()
    .subscribe(result => {
      this.zones = result;
      console.log(result);
    
       var UserObj = Object.values (result);
       this.ArrayZones = UserObj[0];
     });

     this._API.getTypeGrounds()
    .subscribe(result => {
      this.typegrounds = result;
      console.log(result);
      var UserObj = Object.values (result);
       this.ArrayTypeGrounds = UserObj[0];
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
  }

  add(): void {
     
    this._API.addGround(this.model.name , this.model.description , this.model.zone_id , this.model.tygr_id ).subscribe(response => {
      
      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al registrar Terreno',
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
          text: 'Nuevo Terreno registrado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.grounds.push(this.model.name  ,  this.model.description ,  this.model.zone_id , this.model.tygr_id );
              
            }
          })
      }
  
    // this.groups = new Group[id,name,description,create_at,update_at];
     //console.log( this.model.name ,this.model.description ,  this.model.zone_id , this.model.tygr_id )

      
    })
  }


  update(): void {
     
    this._API.updateGround(this.idground, this.nameground , this.descriptionground, this.zone_idground, this.tygr_idground ).subscribe(response => {

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
              this.grounds.push(this.model.name  ,  this.model.description ,  this.model.zone_id , this.model.tygr_id );
              
            }
          })
      }
  
      //this.zones.push(this.model.idground, this.model.ameground , this.model.descriptionground, this.model.zone_idground, this.model.tygr_idground);
    // this.groups = new Group[id,name,description,create_at,update_at];
      console.log( this.model.namerol , this.model.descriptionrol)

      
    })
  }

  detail(groundAlone: Ground): void {
    this._API.getGroundId(groundAlone.id).subscribe(data => {
     
     // this.datas = [groupAlone.id , groupAlone.name , groupAlone.description]
      this.idground = groundAlone.id 
      this.nameground=groundAlone.name
      this.descriptionground = groundAlone.description
       this.zone_idground  = groundAlone.zone_id
      this.tygr_idground = groundAlone.tygr_id

     // console.log(zoneAlone.id ,zoneAlone.name , zoneAlone.description);
    });
}

}
