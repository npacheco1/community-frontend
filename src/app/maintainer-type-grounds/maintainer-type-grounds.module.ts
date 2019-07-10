import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintainerTypeGroundsComponent } from './maintainer-type-grounds.component';
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
        { title: 'Mantenedor tipos de terrenos', url: '/maintainer-type-grounds' },
        { title: 'Maintainer type grounds' }
      ]
    },
    component: MaintainerTypeGroundsComponent
  }
];

@NgModule({
  imports: [FormsModule,  NgbModule, RouterModule.forChild(routes) , DataTableModule , CommonModule],
  declarations: [MaintainerTypeGroundsComponent/*
  , NgbdtabsBasicComponent, ButtonsComponent, NgbdModalBasicComponent*/]
})
export class MaintainerTypeGroundsModule { }
