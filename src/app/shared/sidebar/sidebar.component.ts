import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Users } from '../../models/user.model';
declare var $: any;
import { Providers, ProvidersService } from "../../providers.service";
import swal from 'sweetalert2';
 
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  model: any = {};
  datas = [];
  users: Users[];

  showMenu = '';
  emailLogin = '';
  userLogin = '';
  showSubMenu = '';




  public sidebarnavItems: any[];
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    public router: Router, 
    private route: ActivatedRoute,
    private _API: ProvidersService,
    private modalService2: NgbModal
  ) {}
  
  // End open close
  ngOnInit() {

    this._API.getUserLoggedIn('','');
      


    this.emailLogin = this._API.emailLogin;
   
    this.userLogin = this._API.usernameLogin;
    
    console.log(this._API.usernameLogin);
    
    this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
     
  
    
   
   }
 
  ngAfterViewInit(){

    //this.emailLogin = environment.mailLogin;
    //this.userLogin = environment.userLogin;

     
  }

  // End session
  logout(){
 
    this.router.navigate(['/']);

  }

}
