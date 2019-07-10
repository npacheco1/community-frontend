import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintainerRolesComponent } from './maintainer-roles.component';
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
      title: 'Maintainer roles page',
      urls: [
        { title: 'Mantenedor roles', url: '/maintainer-roles' },
        { title: 'Maintainer roles' }
      ]
    },
    component: MaintainerRolesComponent
  }
];

@NgModule({
  imports: [FormsModule,  NgbModule, RouterModule.forChild(routes) , DataTableModule , CommonModule ],

  declarations: [MaintainerRolesComponent /*
  , NgbdtabsBasicComponent, ButtonsComponent ,  NgbdModalBasicComponent */]
})
export class MaintainerRolesModule { }
