import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
//import {User} from './user';
import {RequestService} from '../services/request.service';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import { Users, Roles } from '../models/user.model';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import {Zones} from '../models/zones.model';

//import { NgbdtabsBasicComponent } from '../component/tabs/tabs.component';

@Component({
  selector: 'app-maintainer',
  templateUrl: './maintainer-users.component.html',
  styleUrls: ['./maintainer-users.component.css'],
  providers: [RequestService]
})

export class MaintainerUsersComponent implements AfterViewInit {
  
  model: any = {};
  datas = [];
  users: Users[];
  ArrayUsers: any = {};
  roles: Roles[];
  ArrayRoles: any = {};
  closeResult: string;
  zones : Zones[];
  ArrayZones: any = {};

  iduser :number;
  nameuser:string;
  addressuser:string;
  phoneuser :string;
  rutuser : string;
  emailuser: string;
  role_iduser : number;
  zone_iduser : number;
  passworduser : string;

  subtitle: string;
  
  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }


  
  constructor(public router: Router, private _API: ProvidersService,
    private modalService: NgbModal,
    private modalService2: NgbModal) {
     //this.ArrayUsers
}

  ngOnInit() {
    this._API.getUsers()
    .subscribe(result => {
      this.users = result;
      console.log(result);
    // var contenido = {result};
       var UserObj = Object.values (result);
       this.ArrayUsers = UserObj[0];
     
       this._API.getRol()
    .subscribe(result => {
      this.roles = result;
      console.log(result);
   
       var UserObj = Object.values (result);
       this.ArrayRoles = UserObj[0];
     });

     this._API.getZones()
    .subscribe(result => {
      this.roles = result;
      console.log(result);
   
       var UserObj = Object.values (result);
       this.ArrayZones = UserObj[0];
     });
    
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

  

  allUsers(): void {
    this._API.getUsers()
      .subscribe(users => {
        this.users = users;
        console.log("usuarios");
        console.log(this.users);
      });
  }
 

  add(): void {
     
    this._API.addUser(this.model.name , this.model.address, this.model.phone , this.model.rut, this.model.email  ,  this.model.password, this.model.role_id , this.model.zone_id  ).subscribe(response => {

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al  registrar Usuario',
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
          text: 'Nuevo Usuario registrado',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.users.push(this.model.name , this.model.address, this.model.phone , this.model.rut, this.model.email  ,  this.model.password, this.model.role_id , this.model.zone_id );           
            }
          })
      }
  
     // this.users.push(this.model.name , this.model.rut, this.model.email , this.model.address , this.model.phone ,  this.model.role_id , this.model.password);
    // this.groups = new Group[id,name,description,create_at,update_at];
     // console.log( this.model.name , this.model.rut, this.model.email , this.model.address , this.model.phone ,  this.model.role_id , this.model.password)

      
    })
  }
  
  ngAfterViewInit() {}

  onSubmit(){
   
}

update(): void {
     
  this._API.updateUser(this.iduser, this.nameuser , this.addressuser, this.phoneuser, this.rutuser ,this.emailuser , this.role_iduser , this.zone_iduser ,this.passworduser  ).subscribe(response => {

    if (response.statusText == "Bad Request"){
      // TODO: better job of transforming error for user consumption
      swal({
        title: 'Advertencia!',
        text: 'Error al Modificar Usuario',
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
        text: 'Usuario Modificado',
        type: 'success',
        timer: 1000,
        onOpen: () => {
          swal.showLoading()
        }
        }).then((result) => {
          if (result.dismiss === swal.DismissReason.timer) {
            this.users.push(this.model.iduser, this.model.nameuser , this.model.addressuser, this.model.phoneuser, this.model.rutuser , this.model.emailuser , this.model.role_iduser , this.model.zone_iduser,  this.model.passworduser );

          }
        })
    }

  // this.groups = new Group[id,name,description,create_at,update_at];
    console.log( this.model.namerol , this.model.descriptionrol)

    
  })
}

detail(userAlone: Users  , zoneAlone : Zones): void {
  this._API.getUserId(userAlone.id ).subscribe(data => {
   
   // this.datas = [groupAlone.id , groupAlone.name , groupAlone.description]
    this.iduser = userAlone.id
     this.nameuser  = userAlone.name
      this.addressuser = userAlone.address
       this.phoneuser = userAlone.phone
        this.rutuser = userAlone.rut
        this.emailuser = userAlone.email
         this.role_iduser = userAlone.role_id
          this.passworduser = userAlone.password
          this.zone_iduser = zoneAlone.id

   // console.log(zoneAlone.id ,zoneAlone.name , zoneAlone.description);
  });
}


}
