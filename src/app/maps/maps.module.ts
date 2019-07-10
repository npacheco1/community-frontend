import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdtabsBasicComponent } from '../component/tabs/tabs.component';
import { ButtonsComponent } from '../component/buttons/buttons.component';
import {DataTableModule} from "angular-6-datatable";
import { NgbdModalBasicComponent } from '../component/modal/modal.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Maps',
      urls: [
        { title: 'Mapa', url: '/maps' },
        { title: 'Maps' }
      ]
    },
    component: MapsComponent
  }
];

@NgModule({
  imports: [
          FormsModule,
          RouterModule.forChild(routes),
          DataTableModule,
          NgxDatatableModule,
          Ng2SmartTableModule,
          //BrowserModule,
          AgmCoreModule.forRoot({apiKey: 'AIzaSyD6Q0v4e0F3uyyopTqj1kX2dzW5cM2pOdU'}),
          NgbModule.forRoot(),
          CommonModule
        ],
  declarations: [MapsComponent/*
  , NgbdtabsBasicComponent, ButtonsComponent, NgbdModalBasicComponent*/]
  ,
  providers: [
    GoogleMapsAPIWrapper
  ]
})
export class MapsModule { }
