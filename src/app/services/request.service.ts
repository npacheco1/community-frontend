import {Injectable} from '@angular/core';
import {Http , Response , Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Observable } from 'rxjs/Observable'; 



@Injectable()
export class RequestService{
    public url:string;
   
    constructor(private _http:Http){
        this.url = "http://138.68.45.250/api/community/portal/user-index"
    }
   
    getPrueba(){
            return 'hola mundo desde el servicio' 

    }

    getUsuarios(){
        return this._http.get(this.url)
                 .map(res =>res.json());
    }
}