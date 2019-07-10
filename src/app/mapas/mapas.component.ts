import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

import { Providers, ProvidersService } from "../providers.service";
import { Dispositive } from '../models/dispositive.model';
import { Event } from '../models/event.model';

import { Router } from '@angular/router';

interface markerx {
	latitude: number;
	longitude: number;
	status?: string;
	draggable: boolean;
}

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {
  dispositives: Dispositive[];
  ArrayDispositives: any = {};
  ArrayEvents: any = {};
  events:Event[];
  latitude : number;

  

  // google maps zoom level
  zoom: number = 10;
  
  // initial center position for the map
  lat: number = -33.4397426;
  lng: number = -70.652605;

  public iconMap (status) {
    if(status=="recibido"){
       return "../../assets/images/sirenR.png";
      
      }
     else(status =="ingresado");{

      return"../../assets/images/sirenV.png";
     } 
   
   
    //iconHeigth:10
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]

  constructor(router: Router, private _API: ProvidersService) { }
 
  markersx: markerx[] = []

  public removeQuote(coord: string): number {
    if(typeof coord !== 'undefined'){  
      return parseFloat(coord);
    }
  }


  ngOnInit() {

    this._API.getEvents()
    .subscribe(result => {
      this.events = result;
      if(typeof result !== 'undefined'){ 
        this.ArrayEvents = result; 
 
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
        this.markersx = this.ArrayEvents.events;
        //this.map.triggerResize() 
        console.log(this.markersx)
        
      } 
 

       var UserObj = Object.values (result); 
     }); 


  }

}
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
