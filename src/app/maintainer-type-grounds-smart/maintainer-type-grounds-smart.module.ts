import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintainerTypeGroundsSmartComponent } from './maintainer-type-grounds-smart.component';

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
      title: 'type-ground-Smart-table',
      urls: [
        { title: 'Tabla dinamica', url: '/maintainer-type-grounds-smart' },
        { title: 'Type-Grounds Smart' }
      ]
    },
    component: MaintainerTypeGroundsSmartComponent
  }
];

@NgModule({
  imports: [FormsModule,  NgbModule, RouterModule.forChild(routes) , DataTableModule , CommonModule,  NgxDatatableModule,
    Ng2SmartTableModule],
  declarations: [MaintainerTypeGroundsSmartComponent/*
  , NgbdtabsBasicComponent, ButtonsComponent, NgbdModalBasicComponent*/]
})
export class MaintainerTypeGroundsSmartModule { }
