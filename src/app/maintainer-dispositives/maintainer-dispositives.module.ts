import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintainerDispositivesComponent } from './maintainer-dispositives.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdtabsBasicComponent } from '../component/tabs/tabs.component';
import { ButtonsComponent } from '../component/buttons/buttons.component';
import {DataTableModule} from "angular-6-datatable";
import { NgbdModalBasicComponent } from '../component/modal/modal.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Maintainer dispositives page',
      urls: [
        { title: 'Mantenedor de Dispositivos', url: '/maintainer-dispositives' },
        { title: 'Maintainer dispositives' }
      ]
    },
    component:  MaintainerDispositivesComponent
  }
];

@NgModule({
  imports: [FormsModule,  
    NgbModule, 
    RouterModule.forChild(routes) , 
    DataTableModule , 
    CommonModule ,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyD6Q0v4e0F3uyyopTqj1kX2dzW5cM2pOdU'})
  ],
  declarations: [MaintainerDispositivesComponent/*,
    NgbdtabsBasicComponent, 
    ButtonsComponent ,  
  NgbdModalBasicComponent*/]
})
export class MaintainerDispositivesModule { }
