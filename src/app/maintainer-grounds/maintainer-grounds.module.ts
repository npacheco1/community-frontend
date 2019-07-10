import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintainerGroundsComponent } from './maintainer-grounds.component';
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
      title: 'Maintainer grounds page',
      urls: [
        { title: 'Mantenedor terrenos', url: '/maintainer-grounds' },
        { title: 'Maintainer grounds' }
      ]
    },
    component: MaintainerGroundsComponent
  }
];

@NgModule({
  imports: [FormsModule,  NgbModule, RouterModule.forChild(routes) , DataTableModule , CommonModule],
  declarations: [MaintainerGroundsComponent/*
  , NgbdtabsBasicComponent, ButtonsComponent, NgbdModalBasicComponent*/]
})
export class MaintainerGroundsModule { }
