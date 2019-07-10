import { Component, AfterViewInit } from '@angular/core';
import * as c3 from 'c3'; 
import { Providers, ProvidersService } from "../../../providers.service";

interface Dates {
	name?: string;
	total?: string; 
}

@Component({
  selector: 'app-realdata',
  templateUrl: './realdata.component.html',
  styleUrls: ['./realdata.component.css']
})
export class RealdataComponent implements AfterViewInit {
  Arraychart: any = {};
  dfec: Dates[] = []
  
  constructor(private _API: ProvidersService) {}

  ngAfterViewInit() {

    this._API.getshowChartEventsZone()
    .subscribe(result => {  
       this.Arraychart = result;    
       this.dfec = this.Arraychart.graphic;

        console.log(result);

            var chart = c3.generate({
                bindto: '#placeholder',
                data: {   
                    rows: [
                       
                            this.Arraychart.graphic.map((item) => {
                                return [item.name ]
                        }) 
                         ,
                        
                            this.Arraychart.graphic.map((item) => { 
                                return [item.total ]
                        }) ,
                        [90, 120, 300]
                    ]
                } 
            });   
                
    }); 
  }
}
