import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintainerModelsComponent } from './maintainer-models.component';
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
      title: 'Maintainer models page',
      urls: [
        { title: 'Mantenedor de Modelos', url: '/maintainer-models' },
        { title: 'Maintainer models' }
      ]
    },
    component: MaintainerModelsComponent
  }
];

@NgModule({
  imports: [FormsModule,  NgbModule, RouterModule.forChild(routes) , DataTableModule , CommonModule ],
  declarations: [MaintainerModelsComponent/*
  ,NgbdtabsBasicComponent, ButtonsComponent ,  NgbdModalBasicComponent*/]
})
export class MaintainerModelsModule { }
