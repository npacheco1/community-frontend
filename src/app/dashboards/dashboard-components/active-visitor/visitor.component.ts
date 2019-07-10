import { Component } from '@angular/core';
import { Providers, ProvidersService } from "../../../providers.service";

interface Grounds {
	name?: string;
	total?: string; 
}

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent {
 
  Arraychart: any = {}; 
  tgrounds: string = '';
  grounds: Grounds[] = []

  constructor(private _API: ProvidersService) {}

  calcPercent(v, t) {
    t = this.tgrounds;
 
    return (100*v/t).toFixed(2) + '%';
  };


  ngOnInit() {

    this._API.getGroundsEvents()
    .subscribe(result => {  
      this.Arraychart = result;    
      this.grounds = this.Arraychart.grounds;

      this.Arraychart.grounds.map((item) => { 
        this.tgrounds = item.teventos;
      }) 


    });

  }


}
