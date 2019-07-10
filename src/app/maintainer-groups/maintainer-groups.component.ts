import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
//import {User} from './user';
import {RequestService} from '../services/request.service';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import { Group } from '../models/group.model';
import { Users } from '../models/user.model';
import { FormGroup, FormControl } from '@angular/forms';
import { group } from '@angular/animations';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';

@Component({
  selector: 'app-maintainer-groups',
  templateUrl: './maintainer-groups.component.html',
  styleUrls: ['./maintainer-groups.component.css']
})
export class MaintainerGroupsComponent implements AfterViewInit , OnInit{
 
  closeResult: string;
  model: any = {};
  datas = [];
  groups: Group[];
  rolesUser: Users[]
  ArrayGroups: any = {};
  ArrayUsers: any = {};

  ArrayGroupAlone: any = {};
  subtitle: string;

  
  idgroup :number;
  namegroup:string;
  descriptiongroup:string;
  user_idgroup: number;

  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }

  constructor(public router: Router, private _API: ProvidersService,
    private modalService: NgbModal,
    private modalService2: NgbModal) {}


  ngOnInit() {
    
    this._API.getGroup()
    .subscribe(result => {
      this.groups = result;
      console.log(result);
   
       var UserObj = Object.values (result);
       this.ArrayGroups = UserObj[0];
     });
     

     /*Dirigente JJVV*/
     this._API.UserROLE('Dirigente JJVV' ).subscribe(response => {
      console.log(response)
         var UserObj = Object.values (response);
          this.ArrayUsers = UserObj[0];
     })


     
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
     
        this._API.addGroup(this.model.name , this.model.description , this.model.user_id ).subscribe(response => {
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
                    location.reload();
                    this.groups.push(this.model.name  ,  this.model.description , this.model.user_id)
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
     
        this._API.updateGroup(this.idgroup, this.namegroup , this.descriptiongroup , this.user_idgroup ).subscribe(response => {


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
                  location.reload();
                  this.groups.push(this.model.idgroup, this.model.namegroup , this.model.descriptiongroup , this.model.user_idgroup );
                  
                }
              })
          }
      
          
        // this.groups = new Group[id,name,description,create_at,update_at];
        //  console.log( this.model.name ,this.model.description)

          
        })
      }

      detail(groupAlone: Group): void {
        this._API.getGroupId(groupAlone.id).subscribe(data => {
         
         // this.datas = [groupAlone.id , groupAlone.name , groupAlone.description]
          this.idgroup = groupAlone.id 
          this.namegroup= groupAlone.name
          this.descriptiongroup = groupAlone.description
          this.user_idgroup = groupAlone.user_id


          console.log(groupAlone.id , groupAlone.name , groupAlone.description);
        });
    }

}
