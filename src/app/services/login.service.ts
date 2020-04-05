import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(login: Login) {   //no uso esto, uso la funcion login que esta en user!!!
    return this.http.post<Login>('http://localhost:8080/loginEEEEEE', login).pipe()
  }




}
