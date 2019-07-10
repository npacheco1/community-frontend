import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintainerUsersComponent } from './maintainer-users.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdtabsBasicComponent } from '../component/tabs/tabs.component';
import { ButtonsComponent } from '../component/buttons/buttons.component';
import {DataTableModule} from "angular-6-datatable";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Maintainer user page',
      urls: [
        { title: 'Mantenedor usuarios', url: '/maintainer-users' },
        { title: 'Maintainer users' }
      ]
    },
    component: MaintainerUsersComponent
  }
];

@NgModule({
  imports:  [FormsModule,  NgbModule,CommonModule, RouterModule.forChild(routes) , DataTableModule ],
  declarations: [MaintainerUsersComponent /*, NgbdtabsBasicComponent, ButtonsComponent*/]
})
export class MaintainerUsersModule { }
