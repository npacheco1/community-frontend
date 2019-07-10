import { Component,AfterViewInit } from '@angular/core'; 
import * as c3 from 'c3';
import { Providers, ProvidersService } from "../../../providers.service";

interface Chartx {
	name?: string;
	total?: string; 
}


@Component({
  selector: 'app-email-compaign2',
  templateUrl: './email-compaign2.component.html' 
})
export class Emailcompaign2Component implements AfterViewInit {
  Arraychart: any = {};
  charter: Chartx[] = []
  constructor(private _API: ProvidersService) {}





  calcPercent(v, t) {
    return 100*v/t;
  };

  ngAfterViewInit() {
    

    this._API.getIncidenceType()
    .subscribe(result => {  
       this.Arraychart = result;    

        var chart = c3.generate({
            bindto: '#report_bar',
            data: {
                columns:  
                  this.Arraychart.zone.map((item) => {  
                    return [item.name, item.total]
                  }) 
                ,
                type: 'bar'
            }, 
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
                // or
                //width: 100 // this makes bar width 100px
            }
        });  
    });

     
    
  }
}

