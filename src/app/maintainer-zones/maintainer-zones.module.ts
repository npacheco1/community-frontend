import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintainerZonesComponent } from './maintainer-zones.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdtabsBasicComponent } from '../component/tabs/tabs.component';
import { ButtonsComponent } from '../component/buttons/buttons.component';
import {DataTableModule} from "angular-6-datatable";
import { NgbdModalBasicComponent } from '../component/modal/modal.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Maintainer Sector  page',
      urls: [
        { title: 'Mantenedor Sectores', url: '/maintainer-zones' },
        { title: 'Maintainer Sector' }
      ]
    },
    component: MaintainerZonesComponent
  }
];

@NgModule({
  imports: [FormsModule,  NgbModule, RouterModule.forChild(routes) , DataTableModule , CommonModule ],
  declarations: [MaintainerZonesComponent/*, NgbdtabsBasicComponent, ButtonsComponent, NgbdModalBasicComponent*/]
})
export class MaintainerZonesModule { }

