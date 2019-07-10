import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapasComponent } from './mapas.component';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdtabsBasicComponent } from '../component/tabs/tabs.component';
import { ButtonsComponent } from '../component/buttons/buttons.component';
import {DataTableModule} from "angular-6-datatable";
import { NgbdModalBasicComponent } from '../component/modal/modal.component';
//import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';

//import { AppComponent } from './app.component';
//import { HelloComponent } from './hello.component';
import { AgmCoreModule } from '@agm/core';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'mapas',
      urls: [
        { title: 'MAPAS', url: '/mapas' },
        { title: 'mapas' }
      ]
    },
    component: MapasComponent
  }
];

@NgModule({
  imports:      [
          FormsModule,
          RouterModule.forChild(routes),
          DataTableModule,
         
          //BrowserModule,
          //AgmCoreModule.forRoot({apiKey: 'AIzaSyD6Q0v4e0F3uyyopTqj1kX2dzW5cM2pOdU'}),
          NgbModule.forRoot(),
          CommonModule,
          //BrowserModule,
          FormsModule,
          AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyD6Q0v4e0F3uyyopTqj1kX2dzW5cM2pOdU'
    })
  ],

  declarations: [MapasComponent/*, NgbdtabsBasicComponent, ButtonsComponent ,  NgbdModalBasicComponent*/],
  bootstrap:    [ MapasComponent]
})
export class MapasModule { }
