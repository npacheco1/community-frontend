import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintainerDispositivesSmartComponent } from './maintainer-dispositives-smart.component';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdtabsBasicComponent } from '../component/tabs/tabs.component';
import { ButtonsComponent } from '../component/buttons/buttons.component';
import {DataTableModule} from "angular-6-datatable";
import { NgbdModalBasicComponent } from '../component/modal/modal.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dispositives-Smart-table',
      urls: [ 
        { title: 'Tabla dinamica', url: '/maintainer-dispositives-smart' },
        { title: 'Dispositives Smart' }
      ]
    },
    component:MaintainerDispositivesSmartComponent
  }
];
@NgModule({
  imports: [FormsModule,  NgbModule, RouterModule.forChild(routes) , DataTableModule , CommonModule,  NgxDatatableModule,
    Ng2SmartTableModule],
  declarations: [MaintainerDispositivesSmartComponent/*
  , NgbdtabsBasicComponent, ButtonsComponent, NgbdModalBasicComponent*/]
})
export class MaintainerDispositivesSmartModule { }
