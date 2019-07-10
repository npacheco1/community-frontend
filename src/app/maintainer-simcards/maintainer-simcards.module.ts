import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintainerSimcardsComponent } from './maintainer-simcards.component';
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
      title: 'Maintainer simcards page',
      urls: [
        { title: 'Mantenedor tarjetas sim', url: '/maintainer-simcards' },
        { title: 'Maintainer simcards' }
      ]
    },
    component: MaintainerSimcardsComponent
  }
];

@NgModule({
  imports: [FormsModule,  NgbModule, RouterModule.forChild(routes) , DataTableModule , CommonModule ],
  declarations: [MaintainerSimcardsComponent/*, NgbdtabsBasicComponent, ButtonsComponent ,  NgbdModalBasicComponent*/]
})
export class MaintainerSimcardsModule { }
