import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Users } from './models/user.model';
import {TypeGrounds} from './models/type-grounds.model';
import { Zones } from './models/zones.model';
import { Group }from './models/group.model';
import {Ground} from './models/ground.model';
import { group } from '@angular/animations';
import { Roles }from './models/rol.model';
import { Model } from './models/model.model';
import { Dispositive } from './models/dispositive.model';
import { Simcard } from './models/simcard.model';
import { Status } from './models/status.model';
import { Action } from './models/action.model';
import { Incidence } from './models/incidence.model';
import { Contact } from './models/contact.model';
import { Event} from './models/event.model';
import { environment } from '../environments/environment';




export interface Providers {
  email: string;
  password: string;
  statusText: string;
  ok :boolean;
  user: any; 
  name:''; 
  usernameLogin :string;
  emailLogin : string;
  
}  
  
@Injectable()

export class ProvidersService {


  
  url_portal = "http://186.10.95.184/api/community/portal";
  /*url_portal = "http://138.68.45.250/api/community/portal";*/
  url_portal_local = "http://186.10.95.184/api/community/portal";
  url_authenticate = "http://186.10.95.184/api/";
  urlGetID = "http://186.10.95.184/api/community/portal/"
  catchErr: any;
  message:any;
  finalURL :string;
  usernameLogin: string;
  emailLogin: string;

  constructor(public router: Router, private http: HttpClient) { }

 
  /*****************/
 /** METODOS GET **/
/*****************/


  /** GET obtenemos todos los usuarios */
  getUsers (): Observable<Users[]> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(user.access_token);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };

    //console.log(user.access_token);
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL =  this.url_portal + '/user-index';
    return this.http.get<Users[]>(finalURL, httpOptions)
      .pipe(
        tap(users => this.log(`fetched users`)),
        catchError(this.handleError('getUsers', []))
      );
  }
/** GET obtenemos todos los tipos de terrenos */
  getTypeGrounds (): Observable<TypeGrounds[]> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(user.access_token);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL = this.url_portal + '/typeground-index';
    return this.http.get<TypeGrounds[]>(finalURL, httpOptions)
      .pipe(
        tap(typegrounds => this.log(`fetched typegrounds`)),
        catchError(this.handleError('getTypeGrounds', []))
      );
  }

  getActions (): Observable<Action[]> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(user.access_token);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL = this.url_portal + '/action-index';
    return this.http.get<Action[]>(finalURL, httpOptions)
      .pipe(
        tap(zones => this.log(`fetched actions`)),
        catchError(this.handleError('getActions', []))
      );
  }
  /** GET obtenemos todos las zonas */
  getZones (): Observable<Zones[]> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(user.access_token);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL = this.url_portal + '/zone-index';
    return this.http.get<Zones[]>(finalURL, httpOptions)
      .pipe(
        tap(zones => this.log(`fetched zones`)),
        catchError(this.handleError('getZones', []))
      );
  }
/** GET obtenemos todos los Grupos */
  getGroup (): Observable<Group[]> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(user.access_token);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL =  this.url_portal + '/group-index';
    return this.http.get<Group[]>(finalURL, httpOptions)
      .pipe(
        tap(zones => this.log(`fetched group`)),
        catchError(this.handleError('getGroup', []))
      );
  }

  getContact (): Observable<Contact[]> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(user.access_token);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL =  this.url_portal + '/contact-index';
    return this.http.get<Contact[]>(finalURL, httpOptions)
      .pipe(
        tap(zones => this.log(`fetched contact`)),
        catchError(this.handleError('getContact', []))
      );
  }

  getUserROLES<Data>(role_name: string): Observable<Users> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };
    const finalURL =  this.url_portal + '/user-show';
    var params = JSON.stringify({'role_name': role_name})
    const url = `${this.url_portal}/user-role/${role_name}`;
    return this.http.post<Users[]>(url,httpOptions)
      .pipe(
        map(user => user[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} zone id=${role_name}`);
        }),
        catchError(this.handleError<Users>(`getUserId id=${role_name}`))
      );
  }



  getUsersROL (): Observable<Users[]> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(user.access_token);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };

    //console.log(user.access_token);
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL =  this.url_portal + '/user-role?role_name=user';
    return this.http.get<Users[]>(finalURL, httpOptions)
      .pipe(
        tap(users => this.log(`fetched users`)),
        catchError(this.handleError('getUsers', []))
      );
  }

  UserROLE ( role_name: string ): Observable<Users> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL =  this.url_portal + '/user-role';
    var params = JSON.stringify({'role_name': role_name, })
    return this.http.post<Users>(finalURL, params , httpOptions).pipe(
      tap((user: Users) => this.log(`added user w/ id=${user.id}`)),
      catchError(this.handleError<Users>('addUser'))
    );
  }

  /*


addUser ( name: string ,address: string ,phone: string ,rut: string,email: string ,  password : string ,role_id : number , zone_id : number ): Observable<Users> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/user-store';
  var params = JSON.stringify({'name': name, 'address': address, 'phone': phone, 'rut':rut, 'email': email, 'password' : password,'role_id': role_id, 'zone_id':zone_id})
  return this.http.post<Users>(finalURL, params , httpOptions).pipe(
    tap((user: Users) => this.log(`added user w/ id=${user.id}`)),
    catchError(this.handleError<Users>('addUser'))
  );
}

  
  getUserId<Data>(id: number): Observable<Users> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  const finalURL =  this.url_portal + '/user-show';
  var params = JSON.stringify({'id': id})
  const url = `${this.url_portal}/user-show/${id}`;
  return this.http.get<Users[]>(url,httpOptions)
    .pipe(
      map(user => user[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} zone id=${id}`);
      }),
      catchError(this.handleError<Users>(`getUserId id=${id}`))
    );
}

  
  
  getUsers (): Observable<Users[]> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(user.access_token);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };

    //console.log(user.access_token);
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL =  this.url_portal + '/user-index';
    return this.http.get<Users[]>(finalURL, httpOptions)
      .pipe(
        tap(users => this.log(`fetched users`)),
        catchError(this.handleError('getUsers', []))
      );
  }

*/



  getIncidence (): Observable<Incidence[]> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(user.access_token);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL =  this.url_portal + '/incidence-index';
    return this.http.get<Incidence[]>(finalURL, httpOptions)
      .pipe(
        tap(incidence => this.log(`fetched group`)),
        catchError(this.handleError('getIncidence', []))
      );
  }

  /** GET obtenemos todos los Grupos */
  getSim (): Observable<Simcard[]> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(user.access_token);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL =  this.url_portal + '/simcard-index';
    return this.http.get<Simcard[]>(finalURL, httpOptions)
      .pipe(
        tap(zones => this.log(`fetched group`)),
        catchError(this.handleError('getSim', []))
      );
  }

  /** GET obtenemos todos los Modelos */
  getModel (): Observable<Model[]> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(user.access_token);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL =  this.url_portal + '/model-index';
    return this.http.get<Model[]>(finalURL, httpOptions)
      .pipe(
        tap(models => this.log(`fetched model`)),
        catchError(this.handleError('getModel', []))
      );
  }

  /** GET obtenemos todos los Dispositivos */
  getDispositive (): Observable<Dispositive[]> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(user.access_token);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL =  this.url_portal + '/dispositive-index';
    return this.http.get<Dispositive[]>(finalURL, httpOptions)
      .pipe(
        tap(dispositives => this.log(`fetched model`)),
        catchError(this.handleError('getDispositive', []))
      );
  }


  getEvents (): Observable<Event[]> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(user.access_token);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL =  this.url_portal + '/event-index';
    return this.http.get<Event[]>(finalURL, httpOptions)
      .pipe(
        tap(events => this.log(`fetched model`)),
        catchError(this.handleError('getEvent', []))
      );
  }

/** GET obtenemos todos los Status */

  getStatus (): Observable<Status[]> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(user.access_token);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL =  this.url_portal + '/status-index';
    return this.http.get<Status[]>(finalURL, httpOptions)
      .pipe(
        tap(zones => this.log(`fetched status`)),
        catchError(this.handleError('getStatus', []))
      );
  }

  /** GET obtenemos todos los roles */

  getRol (): Observable<Roles[]> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(user.access_token);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL =  this.url_portal + '/role-index';
    return this.http.get<Roles[]>(finalURL, httpOptions)
      .pipe(
        tap(zones => this.log(`fetched rol`)),
        catchError(this.handleError('getRol', []))
      );
  }


/** GET obtenemos todos los  Terrenos */
  getGrounds (): Observable<Ground[]> {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //console.log(user.access_token);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
    };
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL =  this.url_portal + '/ground-index';
    return this.http.get<Ground[]>(finalURL, httpOptions)
      .pipe(
        tap(typegrounds => this.log(`fetched typegrounds`)),
        catchError(this.handleError('getGrounds', []))
      );
  }

  getUserLoggedIn(usernameLogin , emailLogin) {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    //this.http.post<user>()
    var userlogged :any
    userlogged = user.user
    var objet0 : any

    objet0 =userlogged[0]
    //var usernameLogin : string;
    //var emailLogin : string;
    objet0.name
    objet0.email
   this.usernameLogin = objet0.name
   this.emailLogin = objet0.email

    console.log(this.usernameLogin , this.emailLogin);

   
  }

   /** POST: añadimos un nuevo cluster */
   login (username: string, password: string): Observable<Providers> {
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var finalURL =  this.url_authenticate + 'auth/login';
    var params = JSON.stringify({'email': username, 'password': password});
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    return this.http.post<Providers>(finalURL, params, httpOptions)
    .pipe(map(data => {
          // login successful if there's a user in the response
          if (data) {
              // store user details and basic auth credentials in local storage
              // to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(data));
              console.log(data);
              if(data.user[0].name != null || data.user[0].name != ''){ 
                environment.userLogin = data.user[0].name ;
               
                console.log(environment.userLogin)
              }
          }
         
        
          this.message = "Success";
          return this.message;
          
      }),
      catchError(this.handleError<Providers>('addCluster'))
    );
  }

  
  



  /******************/
 /** METODOS POST **/
/******************/

  /**POST Agregamos nuevo grupo */
 
 addGroup (name: string , description: string , user_id :number) : Observable<Group> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/group-store';
  var params = JSON.stringify({'name': name, 'description': description , 'user_id': user_id})
  return this.http.post<Group>(finalURL, params , httpOptions).pipe(
    tap((group: Group) => this.log(`added group w/ id=${group.id}`)),
    catchError(this.handleError<Group>('addGroup'))
  );
}

addContact (name: string , description: string , phone : string , address : string , email:string): Observable<Contact> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/contact-store';
  var params = JSON.stringify({'name': name, 'description': description , 'phone': phone , 'address':address , 'email':email})
  return this.http.post<Contact>(finalURL, params , httpOptions).pipe(
    tap((contact: Contact) => this.log(`added contact w/ id=${contact.id}`)),
    catchError(this.handleError<Contact>('addContact'))
  );
}

addIncidence (name: string , description: string ,contacts : any ): Observable<Incidence> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/incidence-store';
  var params = JSON.stringify({'name': name, 'description': description , 'contacts' : contacts})
  return this.http.post<Incidence>(finalURL, params , httpOptions).pipe(
    tap((incidence: Incidence) => this.log(`added group w/ id=${incidence.id}`)),
    catchError(this.handleError<Incidence>('addGroup'))
  );
}

/**POST Agregamos nuevo modelo */
 
addModel (name: string , power_supply: string,frecuency_gsm: string, exit_relay: string,weight :string,outer_dimension : string,humidity_range : string,temperature_range : string): Observable<Model> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/model-store';
 
  var params = JSON.stringify({'name': name, 'power_supply': power_supply , 'frecuency_gsm':frecuency_gsm ,  'exit_relay':exit_relay , 'weight': weight, 'outer_dimension':outer_dimension , 'humidity_range': humidity_range , 'temperature_range':temperature_range})
  return this.http.post<Model>(finalURL, params , httpOptions).pipe(
    tap((model: Model) => this.log(`added model w/ id=${model.id}`)),
    catchError(this.handleError<Model>('addModel'))
  );
}

addAction (name: string , value : string , dispositive_id: number  ): Observable<Action> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/action-store';
  var params = JSON.stringify({'name': name, 'value':value , 'dispositive_id' : dispositive_id })
  return this.http.post<Action>(finalURL, params , httpOptions).pipe(
    tap((actions:Action) => this.log(`added zone w/ id=${actions.id}`)),
    catchError(this.handleError<Action>('addAction'))
  );
}


/**POST Agregamos nueva zona */
addZone (name: string , description: string , grou_id: string): Observable<Zones> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/zone-store';
  var params = JSON.stringify({'name': name, 'description': description , 'grou_id' : grou_id})
  return this.http.post<Zones>(finalURL, params , httpOptions).pipe(
    tap((zones: Zones) => this.log(`added zone w/ id=${zones.id}`)),
    catchError(this.handleError<Zones>('addZone'))
  );
}

/**POST Agregamos nuevo Dispositivo */
addDispositive (name: string,model_id: number, latitude: string,longitude: string, status_id :number,zone_id:number,sim_id:number,time:number): Observable<Dispositive> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/dispositive-store';
  var params = JSON.stringify({'name': name, 'model_id': model_id , 'latitude' : latitude , 'longitude' : longitude , 'status_id' : status_id , 'zone_id' : zone_id , 'sim_id': sim_id ,'time': time})
  return this.http.post<Dispositive>(finalURL, params , httpOptions).pipe(
    tap((dispositive: Dispositive) => this.log(`added dispositive w/ id=${dispositive.id}`)),
    catchError(this.handleError<Dispositive>('addDispositive'))
  );
}

/**POST Agregamos nuevo terrenp */
addGround (name: string , description: string ,  zone_id: string, tygr_id: string): Observable<Ground> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/ground-store';
  var params = JSON.stringify({'name': name, 'description': description , 'zone_id' : zone_id , 'tygr_id': tygr_id })
  return this.http.post<Ground>(finalURL, params , httpOptions).pipe(
    tap((ground: Ground) => this.log(`added ground w/ id=${ground.id}`)),
    catchError(this.handleError<Ground>('addGround'))
  );
}

/**POST Agregamos nuevo tipo de terreno */

addTypeGround (name: string , description: string): Observable<TypeGrounds> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/typeground-store';
  var params = JSON.stringify({'name': name, 'description': description})
  return this.http.post<TypeGrounds>(finalURL, params , httpOptions).pipe(
    tap((group: TypeGrounds) => this.log(`added group w/ id=${group.id}`)),
    catchError(this.handleError<TypeGrounds>('addGroup'))
  );
}

/**POST Agregamos nuevo rol */

addRol (name: string , description: string): Observable<Roles> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/role-store';
  var params = JSON.stringify({'name': name, 'description': description})
  return this.http.post<Roles>(finalURL, params , httpOptions).pipe(
    tap((rol: Roles) => this.log(`added group w/ id=${rol.id}`)),
    catchError(this.handleError<Roles>('addRol'))
  );
}

addUser ( name: string ,address: string ,phone: string ,rut: string,email: string ,  password : string ,role_id : number , zone_id : number ): Observable<Users> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/user-store';
  var params = JSON.stringify({'name': name, 'address': address, 'phone': phone, 'rut':rut, 'email': email, 'password' : password,'role_id': role_id, 'zone_id':zone_id})
  return this.http.post<Users>(finalURL, params , httpOptions).pipe(
    tap((user: Users) => this.log(`added user w/ id=${user.id}`)),
    catchError(this.handleError<Users>('addUser'))
  );
}

addSim (sim_company: string,sim_number: string,purchase_date: any,install_date: any): Observable<Simcard> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/simcard-store';
  console.log(purchase_date)
    
          purchase_date =purchase_date.year+"/"+purchase_date.month+"/"+purchase_date.day
          install_date = install_date.year+"/"+install_date.month+"/"+install_date.day
    



  var params = JSON.stringify({'sim_company': sim_company, 'sim_number': sim_number ,'purchase_date': purchase_date ,'install_date': install_date   })
  return this.http.post<Simcard>(finalURL, params , httpOptions).pipe(
    tap((sim: Simcard) => this.log(`added sim w/ id=${sim.id}`)),
    catchError(this.handleError<Simcard>('addSim'))
  );
}

updateSim (id:number , sim_company: string,sim_number: string,purchase_date: any,install_date: any): Observable<Simcard> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var finalURL =  this.url_portal + '/simcard-update';

  //purchase_date =purchase_date.year+"/"+purchase_date.month+"/"+purchase_date.day
  //install_date = install_date.year+"/"+install_date.month+"/"+install_date.day

  var params = JSON.stringify({'id': id, 'sim_company': sim_company, 'sim_number': sim_number ,'purchase_date': purchase_date ,'install_date': install_date })

 // const url = `${this.clustersUrl}/${cluster.id}`;
  return this.http.post(finalURL, params, httpOptions).pipe(
    tap((group: Group) => this.log(`updated simc id=${group.id}`)),
    catchError(this.handleError<any>('updateSim'))
  );
}

 /** PUT: actualizamos un cluster */
 updateGroup (id:number , name : string , description : string , user_id : number ): Observable<Group> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var finalURL =  this.url_portal + '/group-update';
  var params = JSON.stringify({'id': id, 'name': name, 'description': description , 'user_id': user_id})

 // const url = `${this.clustersUrl}/${cluster.id}`;
  return this.http.post(finalURL, params, httpOptions).pipe(
    tap((group: Group) => this.log(`updated group id=${group.id}`)),
    catchError(this.handleError<any>('updateCluster'))
  );
}

updateContact (id:number , name : string , description : string , phone : string , address : string , email : string): Observable<Contact> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var finalURL =  this.url_portal + '/contact-update';
  var params = JSON.stringify({'id': id, 'name': name, 'description': description , 'phone' : phone , 'address':address , 'email':email})

 // const url = `${this.clustersUrl}/${cluster.id}`;
  return this.http.post(finalURL, params, httpOptions).pipe(
    tap((contact: Contact) => this.log(`updated contact id=${contact.id}`)),
    catchError(this.handleError<any>('updateCluster'))
  );
}

updateIncedence (id:number , name : string , description : string , contacts : any): Observable<Incidence> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var finalURL =  this.url_portal + '/incidence-update';
  var params = JSON.stringify({'id': id, 'name': name, 'description': description , 'contacts' : contacts})

 // const url = `${this.clustersUrl}/${cluster.id}`;
  return this.http.post(finalURL, params, httpOptions).pipe(
    tap((incidence: Incidence) => this.log(`updated incidence id=${incidence.id}`)),
    catchError(this.handleError<any>('updateCluster'))
  );
}

updateAction (id:number , name : string , value:string,  dispositive_id : number): Observable<Action> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var finalURL =  this.url_portal + '/action-update';
  var params = JSON.stringify({'id': id, 'name': name, 'value': value, 'dispositive_id': dispositive_id})

 // const url = `${this.clustersUrl}/${cluster.id}`;
  return this.http.post(finalURL, params, httpOptions).pipe(
    tap((action: Action) => this.log(`updated actiob id=${action.id}`)),
    catchError(this.handleError<any>('updateAction'))
  );
}

/** PUT: actualizamos un Modelo */
updateModel (id: number ,name: string , power_supply: string,frecuency_gsm: string, exit_relay: string,weight :string,outer_dimension : string,humidity_range : string,temperature_range : string): Observable<Model> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var finalURL =  this.url_portal + '/model-update';
  var params = JSON.stringify({'id': id, 'name': name, 'power_supply': power_supply , 'frecuency_gsm':frecuency_gsm ,  'exit_relay':exit_relay , 'weight': weight, 'outer_dimension':outer_dimension , 'humidity_range': humidity_range , 'temperature_range':temperature_range})

 // const url = `${this.clustersUrl}/${cluster.id}`;
  return this.http.post(finalURL, params, httpOptions).pipe(
    tap((model: Model) => this.log(`updated model id=${model.id}`)),
    catchError(this.handleError<any>('updateModel'))
  );
}



getGroupId<Data>(id: number): Observable<Group> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  const finalURL =  this.url_portal + '/group-show';
  var params = JSON.stringify({'id': id})
  const url = `${this.url_portal}/group-show/${id}`;
  return this.http.get<Group[]>(url,httpOptions)
    .pipe(
      map(group => group[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} group id=${id}`);
      }),
      catchError(this.handleError<Group>(`getGroupId id=${id}`))
    );
}

getContactId<Data>(id: number): Observable<Contact> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  const finalURL =  this.url_portal + '/contact-show';
  var params = JSON.stringify({'id': id})
  const url = `${this.url_portal}/contact-show/${id}`;
  return this.http.get<Contact[]>(url,httpOptions)
    .pipe(
      map(contact => contact[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} contact id=${id}`);
      }),
      catchError(this.handleError<Contact>(`getContactId id=${id}`))
    );
}

getIncidenceId<Data>(id: number): Observable<Incidence> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  const finalURL =  this.url_portal + '/group-show';
  var params = JSON.stringify({'id': id})
  const url = `${this.url_portal}/incidence-show/${id}`;
  return this.http.get<Incidence[]>(url,httpOptions)
    .pipe(
      map(incidence => incidence[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} incidence id=${id}`);
      }),
      catchError(this.handleError<Incidence>(`getIncidenceId id=${id}`))
    );
}

getActionId<Data>(id: number): Observable<Action> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  const finalURL =  this.url_portal + '/group-show';
  var params = JSON.stringify({'id': id})
  const url = `${this.url_portal}/action-show/${id}`;
  return this.http.get<Action[]>(url,httpOptions)
    .pipe(
      map(group => group[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} action id=${id}`);
      }),
      catchError(this.handleError<Action>(`getActionId id=${id}`))
    );
}


getModelId<Data>(id: number): Observable<Model> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  const finalURL =  this.url_portal + '/model-show';
  var params = JSON.stringify({'id': id})
  const url = `${this.url_portal}/model-show/${id}`;
  return this.http.get<Model[]>(url,httpOptions)
    .pipe(
      map(model => model[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} model id=${id}`);
      }),
      catchError(this.handleError<Model>(`getModelId id=${id}`))
    );
}

 /** PUT: actualizamos un cluster */
 updateRol (id:number , name : string , description : string): Observable<Roles> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var finalURL =  this.url_portal + '/role-update';
  var params = JSON.stringify({'id': id, 'name': name, 'description': description})

 // const url = `${this.clustersUrl}/${cluster.id}`;
  return this.http.post(finalURL, params, httpOptions).pipe(
    tap((rol: Roles) => this.log(`updated rol id=${rol.id}`)),
    catchError(this.handleError<any>('updateCluster'))
  );
}

getRolId<Data>(id: number): Observable<Roles> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  const finalURL =  this.url_portal + '/role-show';
  var params = JSON.stringify({'id': id})
  const url = `${this.url_portal}/role-show/${id}`;
  return this.http.get<Roles[]>(url,httpOptions)
    .pipe(
      map(rol => rol[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} group id=${id}`);
      }),
      catchError(this.handleError<Roles>(`getRolId id=${id}`))
    );
}

getTypeGroundId<Data>(id: number): Observable<TypeGrounds> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  const finalURL =  this.url_portal + '/typeground-show';
  var params = JSON.stringify({'id': id})
  const url = `${this.url_portal}/typeground-show/${id}`;
  return this.http.get<TypeGrounds[]>(url,httpOptions)
    .pipe(
      map(typeground => typeground[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} typeground id=${id}`);
      }),
      catchError(this.handleError<TypeGrounds>(`getTypeGroundId id=${id}`))
    );
}

updateTypeGround  (id:number , name : string , description : string): Observable<TypeGrounds> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var finalURL =  this.url_portal + '/typeground-update';
  var params = JSON.stringify({'id': id, 'name': name, 'description': description})

 // const url = `${this.clustersUrl}/${cluster.id}`;
  return this.http.post(finalURL, params, httpOptions).pipe(
    tap((typeground: TypeGrounds) => this.log(`updated typeground id=${typeground.id}`)),
    catchError(this.handleError<any>('updateTypeGround'))
  );
}

getZoneId<Data>(id: number): Observable<Zones> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  const finalURL =  this.url_portal + '/zone-show';
  var params = JSON.stringify({'id': id})
  const url = `${this.url_portal}/zone-show/${id}`;
  return this.http.get<Zones[]>(url,httpOptions)
    .pipe(
      map(zone => zone[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} zone id=${id}`);
      }),
      catchError(this.handleError<Zones>(`getZoneId id=${id}`))
    );
}

getDispositiveId<Data>(id: number): Observable<Dispositive> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  const finalURL =  this.url_portal + '/dispositive-show';
  var params = JSON.stringify({'id': id})
  const url = `${this.url_portal}/dispositive-show/${id}`;
  return this.http.get<Dispositive[]>(url,httpOptions)
    .pipe(
      map(dispositive => dispositive[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} dispositive id=${id}`);
      }),
      catchError(this.handleError<Dispositive>(`getDispositiveId id=${id}`))
    );
}

updateZone  (id:number , name : string , description : string , grou_id : string): Observable<Zones> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var finalURL =  this.url_portal + '/zone-update';
  var params = JSON.stringify({'id': id, 'name': name, 'description': description, 'grou_id': grou_id})

 // const url = `${this.clustersUrl}/${cluster.id}`;
  return this.http.post(finalURL, params, httpOptions).pipe(
    tap((zone: Zones) => this.log(`updated zone id=${zone.id}`)),
    catchError(this.handleError<any>('updateZone'))
  );
}




updateGround  (id:number , name : string , description : string , zone_id: number,tygr_id: number,): 
Observable<Ground> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var finalURL =  this.url_portal + '/ground-update';
  var params = JSON.stringify({'id': id, 'name': name, 'description': description, 'zone_id':zone_id , 'tygr_id' : tygr_id })

 // const url = `${this.clustersUrl}/${cluster.id}`;
  return this.http.post(finalURL, params, httpOptions).pipe(
    tap((ground: Ground) => this.log(`updated ground id=${ground.id}`)),
    catchError(this.handleError<any>('updateGround'))
  );
}


updateDispositive  (id:number , name : string , model_id : number  , latitude : string ,  longitude : string  ,status_id : number ,zone_id: number , sim_id : number , time :number 
  ): 
Observable<Ground> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var finalURL =  this.url_portal + '/dispositive-update';
  var params = JSON.stringify({'id': id, 'name': name, 'model_id': model_id, 'latitude':latitude , 'longitude' : longitude , 'status_id':status_id , 'zone_id':zone_id , 'sim_id':sim_id , 'time':time})

 // const url = `${this.clustersUrl}/${cluster.id}`;
  return this.http.post(finalURL, params, httpOptions).pipe(
    tap((dispositive: Dispositive) => this.log(`updated dispositive id=${dispositive.id}`)),
    catchError(this.handleError<any>('updateDispositive'))
  );
}

updateUser  (id:number, name: string ,address: string ,phone: string ,rut: string,email: string , role_id : number  ,zone_id : number, password : string): 
Observable<Users> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var finalURL =  this.url_portal + '/user-update';
  var params = JSON.stringify({'id': id, 'name': name, 'address': address, 'phone': phone, 'rut':rut, 'email': email, 'role_id': role_id, 'zone_id': zone_id  ,'password' : password })

 // const url = `${this.clustersUrl}/${cluster.id}`;
  return this.http.post(finalURL, params, httpOptions).pipe(
    tap((user: Users) => this.log(`updated user id=${user.id}`)),
    catchError(this.handleError<any>('updateUser'))
  );
}

getUserId<Data>(id: number): Observable<Users> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  const finalURL =  this.url_portal + '/user-show';
  var params = JSON.stringify({'id': id})
  const url = `${this.url_portal}/user-show/${id}`;
  return this.http.get<Users[]>(url,httpOptions)
    .pipe(
      map(user => user[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} zone id=${id}`);
      }),
      catchError(this.handleError<Users>(`getUserId id=${id}`))
    );
}

getGroundId<Data>(id: number): Observable<Ground> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  const finalURL =  this.url_portal + '/ground-show';
  var params = JSON.stringify({'id': id})
  const url = `${this.url_portal}/ground-show/${id}`;
  return this.http.get<Ground[]>(url,httpOptions)
    .pipe(
      map(ground => ground[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} zone id=${id}`);
      }),
      catchError(this.handleError<Ground>(`getGroundId id=${id}`))
    );
}


/** GET obtenemos todos las alertas asociadas a juntas de vecinos - events/groups */
getChart (): Observable<Ground[]> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
 
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/showEventforGroups';
  return this.http.get<Ground[]>(finalURL, httpOptions)
    .pipe(
      tap(typegrounds => this.log(`fetched typegrounds`)),
      catchError(this.handleError('getChart', []))
    );
}

/** GET obtenemos todos las alertas asociadas a jterrenos */
getGroundsEvents (): Observable<Ground[]> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
 
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/showGroundsEvents';
  return this.http.get<Ground[]>(finalURL, httpOptions)
    .pipe(
      tap(typegrounds => this.log(`fetched typegrounds`)),
      catchError(this.handleError('showGroundsEvents', []))
    );
}

/** GET obtenemos todos las alertas segun tipo */
getIncidenceType (): Observable<Ground[]> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
 
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/showIncidenceType';
  return this.http.get<Ground[]>(finalURL, httpOptions)
    .pipe(
      tap(typegrounds => this.log(`fetched typegrounds`)),
      catchError(this.handleError('showIncidenceType', []))
    );
} 

/** GET obtenemos todos las alertas segun zona */
getEventZone (): Observable<Ground[]> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
 
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/showCountZone';
  return this.http.get<Ground[]>(finalURL, httpOptions)
    .pipe(
      tap(typegrounds => this.log(`fetched typegrounds`)),
      catchError(this.handleError('showCountZone', []))
    );
} 

/** GET obtenemos todos las alertas segun zona events graphics */
getshowChartEventsZone (): Observable<Ground[]> {
  var user = JSON.parse(localStorage.getItem('currentUser'));
 
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var finalURL =  this.url_portal + '/showChartEventsZone';
  return this.http.get<Ground[]>(finalURL, httpOptions)
    .pipe(
      tap(typegrounds => this.log(`fetched typegrounds`)),
      catchError(this.handleError('showChartEventsZone', []))
    );
}  


/*deleteGroup (group: Group | number): Observable<Group> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+ user.access_token })
  };
  const id = typeof group === 'number' ? group : group.id;
  var finalURL =  this.url_portal + '/group-store';
  const url = `${this.finalURL}/${id}`;

  return this.http.delete<Group>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted cluster id=${id}`)),
    catchError(this.handleError<Group>('deleteGroup'))
  );
}*/

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      /*console.log('I was closed by the timer')
      console.error(error);
      console.error(error.statusText); // log to console instead*/

      // Let the app keep running by returning an empty result.
      //console.log("handle error")
      result = error;
      //console.log(result)
      return of(result as T);
    };
  }

  private log(message: string) {

  }

}
