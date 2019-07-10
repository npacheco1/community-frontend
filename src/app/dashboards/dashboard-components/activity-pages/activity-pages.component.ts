import { Component } from '@angular/core';
import { Providers, ProvidersService } from "../../../providers.service";

interface Zone {
	name?: string;
	total?: string; 
}
@Component({
  selector: 'app-activity-pages',
  templateUrl: './activity-pages.component.html'
})
export class ActivitypagesComponent {

  Arraychart: any = {}; 
  tzone: string = '';
  tzonetotal : string = '';
  zone: Zone[] = []

  constructor(private _API: ProvidersService) {}

  calcPercent(v, t) {
    t = this.tzonetotal;
 
    return (100*v/t).toFixed(2) + '%';
  };


  ngOnInit() {

    this._API.getEventZone()
    .subscribe(result => {  
      this.Arraychart = result;    
      this.zone = this.Arraychart.zone;
      
       this.Arraychart.zone.map((item) => { 
        this.tzone = item.teventos;
        this.tzonetotal = item.tevents;
      }) 


    });

  }


}
