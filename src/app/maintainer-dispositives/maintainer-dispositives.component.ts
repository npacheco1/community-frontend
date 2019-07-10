import { Component, OnInit ,ViewChild} from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
//import {User} from './user';
import {RequestService} from '../services/request.service';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import { Dispositive } from '../models/dispositive.model';
import { Model } from '../models/model.model';
import { Status } from '../models/status.model';
import { FormGroup, FormControl } from '@angular/forms';
import { group } from '@angular/animations';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import { Zones } from '../models/zones.model';
import { Simcard } from '../models/simcard.model';
import { MapsAPILoader, AgmMap } from '@agm/core';

declare var google: any;
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  address_level_1?:string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  marker?: Marker;
}

@Component({
  selector: 'app-maintainer-dispositives',
  templateUrl: './maintainer-dispositives.component.html',
  styleUrls: ['./maintainer-dispositives.component.css']
})
export class MaintainerDispositivesComponent implements  AfterViewInit, OnInit {

  closeResult: string;
  model: any = {};
  datas = [];
  
  ArrayDispositives: any = {};
  ArrayDispositiveAlone: any = {};
  ArrayModels : any = {};
  ArrayStatus : any = {};
  ArrayZones : any ={};
  ArraySimcard : any ={}
 
  dispositives: Dispositive[];
  models: Model[];
  status: Status[];
  zones : Zones[];
  simcards : Simcard[];
  subtitle: string;

  idDis:number;
  nameDis: string;
  model_idDis:number;
  latitudeDis:string;
  longitudeDis:string;
  status_idDis:number;
  zone_idDis:number;
  sim_idDis : number;
  timeDis : number;
  circleRadius:number = 10; // km
  
  public location:Location = {
     
    lat: -33.4378,
    lng: -70.6505,
    marker: {
      lat: -33.4378,
      lng: -70.6505,
      draggable: true
    },
    zoom: 20
  };

  address: string ;
  geocoder:any;

  @ViewChild(AgmMap) map: AgmMap;

  constructor(public mapsApiLoader: MapsAPILoader,public router: Router, private _API: ProvidersService,
    private modalService: NgbModal,
    private modalService2: NgbModal) { 

      this.mapsApiLoader = mapsApiLoader;
      this.mapsApiLoader.load().then(() => {
        this.geocoder = new google.maps.Geocoder();
      });
    }


    findLocation( ) {
      if (!this.geocoder) this.geocoder = new google.maps.Geocoder()
      this.geocoder.geocode({
        'address': this.address
      }, (results, status) => {
       
        if (status == google.maps.GeocoderStatus.OK) {
          for (var i = 0; i < results[0].address_components.length; i++) {
            let types = results[0].address_components[i].types
          }
          if (results[0].geometry.location) {
            this.location.lat = results[0].geometry.location.lat();
            this.location.lng = results[0].geometry.location.lng();
            this.location.marker.lat = results[0].geometry.location.lat();
            this.location.marker.lng = results[0].geometry.location.lng();
            this.location.marker.draggable = true;
            this.location.viewport = results[0].geometry.viewport;
          }
          
          this.model.longitude = results[0].geometry.location.lat();
          this.model.latitude = results[0].geometry.location.lng();
          
  
          this.map.triggerResize();
          alert("Coordenadas agregadas correctamente.");
        } else {
          alert("No se encuentra dirección.");
        }
      })
    }

  markerDragEnd(m: any, $event: any) {
    this.location.marker.lat = m.coords.lat;
    this.location.marker.lng = m.coords.lng;
    this.model.longitude = m.coords.lat;
    this.model.latitude = m.coords.lng;
    this.findAddressByCoordinates();
   }

  circleRadiusInKm() {
    return this.circleRadius / 1000;
  }

  milesToRadius(value) {
     this.circleRadius = value / 0.00062137;
  }

  circleRadiusInMiles() {
    return this.circleRadius * 0.00062137;
  }

   findAddressByCoordinates() {
    this.geocoder.geocode({
      'location': {
        lat: this.location.marker.lat,
        lng: this.location.marker.lng
      }
    }, (results, status) => {
       
    })
  }

  ngOnInit() {
    this.location.marker.draggable = true;
 

    this._API.getDispositive()
    .subscribe(result => {
      this.dispositives = result;
      console.log(result);
   
       var UserObj = Object.values (result);
       this.ArrayDispositives = UserObj[0];
     });

     this._API.getModel()
    .subscribe(result => {
      this.models = result;
      console.log(result);
   
       var UserObj = Object.values (result);
       this.ArrayModels = UserObj[0];
     });

     this._API.getStatus()
    .subscribe(result => {
      this.status = result;
      console.log(result);
   
       var UserObj = Object.values (result);
       this.ArrayStatus = UserObj[0];
     });
  
     this._API.getZones()
     .subscribe(result => {
       this.zones = result;
       console.log(result);
    
        var UserObj = Object.values (result);
        this.ArrayZones = UserObj[0];
      });

      this._API.getSim()
      .subscribe(result => {
        this.simcards = result;
        console.log(result);
     
         var UserObj = Object.values (result);
         this.ArraySimcard = UserObj[0];
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

  open_map(content) {
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
     
    this._API.addDispositive(this.model.name , this.model.model_id , this.model.longitude , this.model.latitude , this.model.status_id , this.model.zone_id , this.model.sim_id , this.model.time ).subscribe(response => {
      console.log( this.model.name , this.model.model_id , this.model.longitude , this.model.latitude , this.model.status_id , this.model.zone_id , this.model.sim_id , this.model.time )

      if (response.statusText == "Bad Request"){
        // TODO: better job of transforming error for user consumption
        swal({
          title: 'Advertencia!',
          text: 'Error al registrar Dispositivo',
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
          text: 'Nuevo Dispositivo registrada',
          type: 'success',
          timer: 1000,
          onOpen: () => {
            swal.showLoading()
          }
          }).then((result) => {
            if (result.dismiss === swal.DismissReason.timer) {
              this.dispositives.push(this.model.name , this.model.model_id , this.model.longitude , this.model.latitude , this.model.status_id , this.model.zone_id , this.model.sim_id , this.model.time );              
            }
          })
      }
  
     // this.zones.push(this.model.name  ,  this.model.description , this.model.grou_id);
    // this.groups = new Group[id,name,description,create_at,update_at];
     

      
    })
  }

   
update(): void {
     
  this._API.updateDispositive(this.idDis, this.nameDis, this.model_idDis , this.latitudeDis, this.longitudeDis, this.status_idDis ,this.zone_idDis , this.sim_idDis , this.timeDis).subscribe(response => {

    if (response.statusText == "Bad Request"){
      // TODO: better job of transforming error for user consumption
      swal({
        title: 'Advertencia!',
        text: 'Error al Modificar Dispositivo',
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
        text: 'Dispositivo Modificado',
        type: 'success',
        timer: 1000,
        onOpen: () => {
          swal.showLoading()
        }
        }).then((result) => {
          if (result.dismiss === swal.DismissReason.timer) {
            this.dispositives.push(this.model.idDis, this.model.nameDis , this.model.model_idDis, this.model.latitudeDis, this.model.longitudeDis , this.model.status_idDis , this.model.zone_idDis, this.model.sim_idDis , this.model.timeDis);              
          }
        })
    }
   
  // this.groups = new Group[id,name,description,create_at,update_at];
    console.log( this.model.namerol , this.model.descriptionrol)

    
  })
}
detail(DisAlone: Dispositive): void {
  this._API.getDispositiveId(DisAlone.id).subscribe(data => {
   
   // this.datas = [groupAlone.id , groupAlone.name , groupAlone.description]
    this.idDis =DisAlone.id 
    this.nameDis=DisAlone.name
    this.model_idDis = DisAlone.model_id
    this.latitudeDis = DisAlone.latitude
    this.longitudeDis = DisAlone.longitude
    this.status_idDis = DisAlone.status_id
    this.zone_idDis = DisAlone.zone_id


   // console.log(zoneAlone.id ,zoneAlone.name , zoneAlone.description);
  });
}

}
