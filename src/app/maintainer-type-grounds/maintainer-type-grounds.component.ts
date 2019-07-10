import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
//import {User} from './user';
import {RequestService} from '../services/request.service';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import { TypeGrounds } from '../models/type-grounds.model';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';

@Component({
  selector: 'app-maintainer-type-grounds',
  templateUrl: './maintainer-type-grounds.component.html',
  styleUrls: ['./maintainer-type-grounds.component.css'],
  providers: [RequestService]
})
export class MaintainerTypeGroundsComponent  implements AfterViewInit {
  
  closeResult: string;
  model: any = {};
  datas = [];
  typegrounds: TypeGrounds[];
  ArrayTypeGrounds: any = {};
  subtitle: string;
 
  idtypeground :number;
  nametypeground:string;
  descriptiontypeground:string;

  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }

  constructor(public router: Router, private _API: ProvidersService,
    private modalService: NgbModal,
    private modalService2: NgbModal) { }

  ngOnInit() {

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
     
    this._API.addTypeGround(this.model.name , this.model.description  ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al registrar Tipo de Terreno',
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
          text: 'Nuevo Tipo de Terreno registrado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.typegrounds.push(this.model.name  ,  this.model.description );              
            }
          })
      }
      //this. typegrounds.push(this.model.name  ,  this.model.description );
    // this.groups = new Group[id,name,description,create_at,update_at];
      console.log( this.model.name ,this.model.description  )

      
    })
  }

  update(): void {
     
    this._API.updateTypeGround(this.idtypeground, this.nametypeground , this.descriptiontypeground ).subscribe(response => {

  

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al Modificar Tipo de Terreno',
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
          text: 'Tipo de Terreno Modificado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.typegrounds.push(this.model.idtypeground, this.model.nametypeground , this.model.descriptiontypeground);              
            }
          })
      }

      
    // this.groups = new Group[id,name,description,create_at,update_at];
      console.log( this.model.nametypeground, this.model.descriptiontypeground)

      
    })
  }

  detail(typeGroundlAlone: TypeGrounds): void {
    this._API.getRolId(typeGroundlAlone.id).subscribe(data => {
     
     // this.datas = [groupAlone.id , groupAlone.name , groupAlone.description]
      this.idtypeground = typeGroundlAlone.id 
      this.nametypeground=typeGroundlAlone.name
      this.descriptiontypeground = typeGroundlAlone.description


      console.log(typeGroundlAlone.id ,typeGroundlAlone.name , typeGroundlAlone.description);
    });
}

}
