import { Component, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';
import { Providers, ProvidersService } from "../../../providers.service";


interface Chartx {
	name?: string;
	total?: string; 
}

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})


export class EmailComponent implements AfterViewInit {

  Arraychart: any = {};
  charter: Chartx[] = []
  constructor(private _API: ProvidersService) {}

  ngOnInit() {

    this._API.getChart()
    .subscribe(result => {  
       this.Arraychart = result;  
   
       this.charter = this.Arraychart.groups;
      
    });

  }
 
  calcPercent(v, t) {
    return 100*v/t;
  };

  ngAfterViewInit() {
    

    this._API.getChart()
    .subscribe(result => {  
       this.Arraychart = result;  
   
       this.charter = this.Arraychart.groups;
 
       const chart = c3.generate({ 
        bindto: '#visitor',
        data: { 
          columns: 
            this.Arraychart.groups.map((item) => {
              return [item.name, item.total]
            }) 
           ,
          type: 'donut'
        },
        donut: {
          label: {
            show: false
          },
          title: 'Gráfico circular',
          width: 35
        },
        legend: {
          hide: true
        },
        color: {
          pattern: ['#40c4ff', '#2961ff', '#ff821c', '#7e74fb']
        }
      });
    });

     
    
  }
}
