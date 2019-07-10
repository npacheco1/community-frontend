import { Component ,Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import {style,state, trigger,  transition,animate } from '@angular/animations';
import { Providers, ProvidersService } from "../providers.service";
import { Dispositive } from '../models/dispositive.model';
import { Router } from '@angular/router';
//import { transition } from 'd3';

declare var google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
interface markerx {
	latitude: number;
	longitude: number;
	name?: string;
  draggable: boolean;
  status : {};
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
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
  
  animations:[
    trigger('contenedoAnimable',[
      state('initial',style({
        opacity:0
      })),
      state ('final', style ({
        opacity:1
      })),
      transition('initial => final',animate(2000)),
      transition('final => initial',animate(1000))
  ])
]
})

export class MapsComponent implements OnInit {

  dispositives: Dispositive[];
  ArrayDispositives: any = {};

  labelOptions = {
    color: '#018c08',
    fontFamily: '',
    fontSize: '5px',
    fontWeight: 'bold',
    letterSpacing:'0.5px',
    text: 'Alarma ubicada'
  }

  circleRadius:number = 10; // km
  geocoder:any;
  
  public iconMap (status) {
    if(status.name=="ACTIVO"){
       return "../../assets/images/sirenR.png";
      
      }
     else(status =="INACTIVO");{

      return"../../assets/images/sirenV.png";
     } 
   
   
    //iconHeigth:10
  }

  public location:Location = {
    //plaza de armas 
    lat: -33.4378,
    lng: -70.6505,
    marker: {
      lat: -33.4378,
      lng: -70.6505,
      draggable: true
    },
    zoom: 10
  };

  @ViewChild(AgmMap) map: AgmMap;

  constructor(public mapsApiLoader: MapsAPILoader,
              private zone: NgZone,
              private wrapper: GoogleMapsAPIWrapper,
              router: Router, private _API: ProvidersService) {

    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }

  markersx: markerx[] = [
	  
  ]

  public removeQuote(coord: string): number {
    if(typeof coord !== 'undefined'){  
      return parseFloat(coord);
    }
  }
  
  ngOnInit() { 
    this.location.marker.draggable = true;

      
      this._API.getDispositive()
    .subscribe(result => {
      this.dispositives = result;
      if(typeof result !== 'undefined'){ 
        this.ArrayDispositives = result; 
 
        //this.markersx = this.ArrayDispositives.dispositives[0];
        /*
        let latitud = this.removeSlashes(this.ArrayDispositives.dispositives[0].latitude);
        let longitud = this.removeSlashes(this.ArrayDispositives.dispositives[0].longitude);
        this.markersx = [
          {
            latitude: latitud,
            longitude: longitud,
            name: this.ArrayDispositives.dispositives[0].name,
            draggable: false
          } ];
          */
        this.markersx = this.ArrayDispositives.dispositives;
        this.map.triggerResize() 
        
      } 
 

       var UserObj = Object.values (result); 
     });  
  }

  findLocation(address) {
    if (!this.geocoder) this.geocoder = new google.maps.Geocoder()
    this.geocoder.geocode({
      'address': address
    }, (results, status) => {
     
      if (status == google.maps.GeocoderStatus.OK) {
        for (var i = 0; i < results[0].address_components.length; i++) {
          let types = results[0].address_components[i].types
          console.log(types);
          if (types.indexOf('locality') != -1) {
            this.location.address_level_2 = results[0].address_components[i].long_name
          }
          if (types.indexOf('country') != -1) {
            this.location.address_country = results[0].address_components[i].long_name
          }
          if (types.indexOf('postal_code') != -1) {
            this.location.address_zip = results[0].address_components[i].long_name
          }
          if (types.indexOf('administrative_area_level_1') != -1) {
            this.location.address_state = results[0].address_components[i].long_name
          }
        }
        
        if (results[0].geometry.location) {
          this.location.lat = results[0].geometry.location.lat();

          this.location.lng = results[0].geometry.location.lng();
          this.location.marker.lat = results[0].geometry.location.lat();
          this.location.marker.lng = results[0].geometry.location.lng();
          this.location.marker.draggable = true;
          this.location.viewport = results[0].geometry.viewport;
        }

        this.map.triggerResize()
      } else {
        alert("Sorry, this search produced no results.");
      }
    })
  }

  findAddressByCoordinates() {
    this.geocoder.geocode({
      'location': {
        lat: this.location.marker.lat,
        lng: this.location.marker.lng
      }
    }, (results, status) => {
      this.decomposeAddressComponents(results);
    })
  }

  decomposeAddressComponents(addressArray) {
    if (addressArray.length == 0) return false;
    let address = addressArray[0].address_components;
    //console.log(address);
    for(let element of address) {
      //console.log(element);
      if (element.length == 0 && !element['types']) continue
      if (element['types'].indexOf('street_number') > -1) {
        this.location.address_level_1 = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('route') > -1) {
        this.location.address_level_1 += ', ' + element['long_name'];
        continue;
      }
      if (element['types'].indexOf('locality') > -1) {
        this.location.address_level_2 = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('administrative_area_level_1') > -1) {
        this.location.address_state = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('country') > -1) {
        this.location.address_country = element['long_name'];
        continue;
      }
      if (element['types'].indexOf('postal_code') > -1) {
        this.location.address_zip = element['long_name'];
        continue;
      }
    }
  }

  updateOnMap() {
    console.log('updating')
    let full_address:string = this.location.address_level_1 || ""
    if (this.location.address_level_2) full_address = full_address + " " + this.location.address_level_2
    if (this.location.address_state) full_address = full_address + " " + this.location.address_state
    if (this.location.address_country) full_address = full_address + " " + this.location.address_country
    this.findLocation(full_address);
  
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

  markerDragEnd(m: any, $event: any) {
   this.location.marker.lat = m.coords.lat;
   this.location.marker.lng = m.coords.lng;
   this.findAddressByCoordinates();
  }

}
