import { Component, OnInit } from '@angular/core';

import * as tableData from './smart-table-dispositives';
import { LocalDataSource } from 'ng2-smart-table';
import { Providers, ProvidersService } from "../providers.service";
import { Router } from '@angular/router';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal
} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import {Dispositive} from '../models/dispositive.model';

@Component({
  selector: 'app-maintainer-dispositives-smart',
  templateUrl: './maintainer-dispositives-smart.component.html',
  styleUrls: ['./maintainer-dispositives-smart.component.css']
})
export class MaintainerDispositivesSmartComponent implements OnInit {
 
  source: LocalDataSource;
  source2: LocalDataSource;
  model: any = {};
  datas = [];
  dispositives: Dispositive[];

  ArrayDispositives: any = {};
  closeResult: string;

 

  id: number
  name: string
  model_id: number
  latitude : string
  longitude : string
  status_id: number
 

  constructor(public router: Router, private _API: ProvidersService,) { 
    this.source = new LocalDataSource(tableData.data); // create the source
  }

   //settings = tableData.settings;
   settings2 = tableData.settings2;


  ngOnInit() {
    this._API.getDispositive()
    .subscribe(result => {
      this.dispositives = result;
      //console.log(result);
    // var contenido = {result};
       var UserObj = Object.values (result);
       this.ArrayDispositives = UserObj[0];
      // console.log(this.ArrayUsers)
       this.source2 = new LocalDataSource(this.ArrayDispositives)
 
      });
  }

}
