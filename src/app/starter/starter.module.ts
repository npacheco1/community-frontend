import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './starter.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule } from 'ng-chartist';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';

//import { DashboardRoutes } from '../dashboards/dashboard.routing';

import { Dashboard1Component } from '../dashboards/dashboard1/dashboard1.component';
import { Dashboard2Component } from '../dashboards/dashboard2/dashboard2.component';
import { Dashboard3Component } from '../dashboards/dashboard3/dashboard3.component';
import { Dashboard4Component } from '../dashboards/dashboard4/dashboard4.component';
import { Dashboard5Component } from '../dashboards/dashboard5/dashboard5.component';
import { Dashboard6Component } from '../dashboards/dashboard6/dashboard6.component';
import { Dashboard7Component } from '../dashboards/dashboard7/dashboard7.component';
import { Dashboard8Component } from '../dashboards/dashboard8/dashboard8.component';
import { Dashboard9Component } from '../dashboards/dashboard9/dashboard9.component';
import { Dashboard10Component } from '../dashboards/dashboard10/dashboard10.component';

import {
  ActivevisitComponent,
  VisitorComponent,
  ActivitypagesComponent,
  CamStatsComponent,
  CamoverComponent,
  ConversionEarningsComponent,
  ChartComponent,
  CurrencyComponent,
  MarketComponent,
  OrderComponent,
  CryptoComponent,
  TradeComponent,
  DeviceSalesComponent,
  EarningsComponent,
  EcomSalesComponent,
  EcomorderComponent,
  EcomproductComponent,
  EcomReviewComponent,
  StatsComponent,
  EmailComponent,
  Emailcompaign2Component,
  FeedsComponent,
  InfocardComponent,
  MixstatsComponent,
  MonthoverviewComponent,
  MonthscheduleComponent,
  MonthviewComponent,
  PollComponent,
  ProapprComponent,
  ProfileactivityComponent,
  ProjectComponent,
  Project2Component,
  RealdataComponent,
  RealtimevisitComponent,
  ChatComponent,
  CommentComponent,
  RpbComponent,
  RevenueviewsComponent,
  ReviewComponent,
  SalelocationComponent,
  SalesComponent,
  SocialComponent,
  TasklistComponent,
  ToplocationsComponent,
  TopreferralsComponent,
  TopsellComponent,
  UserprofileComponent,
  WeatherheaderComponent,
  WeathercardComponent,
  WeekpollComponent
} from '../dashboards/dashboard-components';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Starter Page',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Starter Page' }
      ]
    },
    component: StarterComponent
  }
];

@NgModule({
  imports: [
    FormsModule,
     CommonModule,
      RouterModule.forChild(routes),
      PerfectScrollbarModule,
      CalendarModule.forRoot(),
      NgxChartsModule,
      NgxDatatableModule,
      NgbModule,
    ChartsModule,
    ChartistModule,
    ],
  declarations: [
    StarterComponent,
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component,
    Dashboard4Component,
    Dashboard5Component,
    Dashboard6Component,
    Dashboard7Component,
    Dashboard8Component,
    Dashboard9Component,
    Dashboard10Component,
    ActivevisitComponent,
    VisitorComponent,
    ActivitypagesComponent,
    CamStatsComponent,
    CamoverComponent,
    ConversionEarningsComponent,
    ChartComponent,
    CurrencyComponent,
    MarketComponent,
    OrderComponent,
    CryptoComponent,
    TradeComponent,
    DeviceSalesComponent,
    EarningsComponent,
    EcomSalesComponent,
    EcomorderComponent,
    EcomproductComponent,
    EcomReviewComponent,
    StatsComponent,
    EmailComponent,
    Emailcompaign2Component,
    FeedsComponent,
    InfocardComponent,
    MixstatsComponent,
    MonthoverviewComponent,
    MonthscheduleComponent,
    MonthviewComponent,
    PollComponent,
    ProapprComponent,
    ProfileactivityComponent,
    ProjectComponent,
    Project2Component,
    RealdataComponent,
    RealtimevisitComponent,
    ChatComponent,
    CommentComponent,
    RpbComponent,
    RevenueviewsComponent,
    ReviewComponent,
    SalelocationComponent,
    SalesComponent,
    SocialComponent,
    TasklistComponent,
    ToplocationsComponent,
    TopreferralsComponent,
    TopsellComponent,
    UserprofileComponent,
    WeatherheaderComponent,
    WeathercardComponent,
    WeekpollComponent
  ]
})


export class StarterModule {}
