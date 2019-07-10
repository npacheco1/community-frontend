import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintainerActionsComponent } from './maintainer-actions.component';
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
      title: 'Maintainer actions page',
      urls: [
        { title: 'Mantenedor Acciones', url: '/maintainer-actions' },
        { title: 'Maintainer Actions' }
      ]
    },
    component: MaintainerActionsComponent
  }
];

@NgModule({
  imports: [FormsModule,  NgbModule, RouterModule.forChild(routes) , DataTableModule , CommonModule ],
  declarations: [MaintainerActionsComponent /*
  , NgbdtabsBasicComponent, ButtonsComponent, NgbdModalBasicComponent*/]
})
export class MaintainerActionsModule { }
