import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/authentication/login', pathMatch: 'full' },
      { path: 'classic', redirectTo: '/dashboard/classic', pathMatch: 'full' }, //este es el path Classic
      {
        path: 'dashboard',
        loadChildren: './dashboards/dashboard.module#DashboardModule'
      },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      },
      {
        path: 'maintainer-users',
        loadChildren: './maintainer-users/maintainer-users.module#MaintainerUsersModule'
      },
      
      {
        path: 'maintainer-roles',
        loadChildren: './maintainer-roles/maintainer-roles.module#MaintainerRolesModule'
      },
      {
        path: 'maintainer-roles-smart',
        loadChildren: './maintainer-roles-smart/maintainer-roles-smart.module#MaintainerRolesSmartModule'
      },
      {
        path: 'maintainer-groups-smart',
        loadChildren: './maintainer-groups-smart/maintainer-groups-smart.module#MaintainerGroupsSmartModule'
      },
      
      {
        path: 'maintainer-groups',
        loadChildren: './maintainer-groups/maintainer-groups.module#MaintainerGroupsModule'
      },
      {
        path: 'maintainer-contacts',
        loadChildren: './maintainer-contacts/maintainer-contacts.module#MaintainerContactsModule'
      },
      {
        path: 'maintainer-incidences',
        loadChildren: './maintainer-incidences/maintainer-incidences.module#MaintainerIncidencesModule'
      },

    
      {
        path: 'maintainer-zones',
        loadChildren: './maintainer-zones/maintainer-zones.module#MaintainerZonesModule'
      },
      {
        path: 'maintainer-zones-smart',
        loadChildren: './maintainer-zones-smart/maintainer-zones-smart.module#MaintainerZonesSmartModule'
      },
      {
        path: 'maintainer-models',
        loadChildren: './maintainer-models/maintainer-models.module#MaintainerModelsModule'
      },
      {
        path: 'maintainer-models-smart',
        loadChildren: './maintainer-models-smart/maintainer-models-smart.module#MaintainerModelsSmartModule'
      },
      {
        path: 'maintainer-dispositives',
        loadChildren: './maintainer-dispositives/maintainer-dispositives.module#MaintainerDispositivesModule'
      },
      {
        path: 'maintainer-dispositives-smart',
        loadChildren: './maintainer-dispositives-smart/maintainer-dispositives-smart.module#MaintainerDispositivesSmartModule'
      },
      {
        path: 'maintainer-simcards',
        loadChildren: './maintainer-simcards/maintainer-simcards.module#MaintainerSimcardsModule'
      },
      {
        path: 'maintainer-simcards-smart',
        loadChildren: './maintainer-simcards-smart/maintainer-simcards-smart.module#MaintainerSimcardsSmartModule'
      },
      {
        path: 'maintainer-actions',
        loadChildren: './maintainer-actions/maintainer-actions.module#MaintainerActionsModule'
      },
      {
        path: 'maintainer-actions-smart',
        loadChildren: './maintainer-actions-smart/maintainer-actions-smart.module#MaintainerActionsSmartModule'
      },
      {
        path: 'maintainer-grounds',
        loadChildren: './maintainer-grounds/maintainer-grounds.module#MaintainerGroundsModule'
      },
      {
        path: 'maintainer-grounds-smart',
        loadChildren: './maintainer-grounds-smart/maintainer-grounds-smart.module#MaintainerGroundsSmartModule'
      },
      {
        path: 'maintainer-type-grounds',
        loadChildren: './maintainer-type-grounds/maintainer-type-grounds.module#MaintainerTypeGroundsModule'
      },
      {
        path: 'maintainer-type-grounds-smart',
        loadChildren: './maintainer-type-grounds-smart/maintainer-type-grounds-smart.module#MaintainerTypeGroundsSmartModule'
      },
      {
        path: 'smart-table',
        loadChildren: './smart-table/smart-table.module#SmartTableModule'
      },
      {
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
      },
      {
        path: 'wizard',
        loadChildren: './wizard/wizard.module#WizardModule'
      },
     {
        path: 'mapas',
        loadChildren: './mapas/mapas.module#MapasModule'
      },
      
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule'
      },
      
     
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren:
          './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/authentication/login'
  }
];
