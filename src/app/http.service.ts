import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class HttpService {

  constructor(private http : Http) { }

  validarUsuario(user, pass){
  	let datos = JSON.stringify({email: user, password: pass});
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
  	return this.http.post('./login', datos, {headers: headers}).map((response: Response) => response.json());
  }

  allArticulos(){
  	return this.http.get('./articulos/all').map((response: Response) => response.json())
  }

  postDatos(data){
  	let datos = JSON.stringify(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
  	return this.http.post('./articulos/update', datos, {headers: headers}).map((response: Response) => response.json())
  }

}