import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintainerGroupsComponent } from '../maintainer-groups/maintainer-groups.component';
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
      title: 'Maintainer JJVV page',
      urls: [
        { title: 'Mantenedor Junta Vecinal', url: '/maintainer-groups' },
        { title: 'Maintainer JJVV' }
      ]
    },
    component: MaintainerGroupsComponent
  }
];

@NgModule({
  imports: [FormsModule,  NgbModule, RouterModule.forChild(routes) , DataTableModule , CommonModule ],
  declarations: [MaintainerGroupsComponent /*
  , NgbdtabsBasicComponent, ButtonsComponent ,  NgbdModalBasicComponent*/]
})
export class MaintainerGroupsModule { }
