import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Login } from '../models/login';
import { Role } from '../models/role';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl="http://localhost:8080/"
  us :  User = new User();
  lo : Login = new Login();
 


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<User[]>('http://localhost:8080/user/all').pipe()
  }

 getById(idUser: number) {
   return this.http.get<User>('http://localhost:8080/user/'+idUser).pipe()
 }

 getByIdent(identUser: String) {
   console.log("en userService busco el identifiant :"+identUser)
  //return this.http.get<User>('http://localhost:8080/user/ident/'+identUser).pipe()
  return this.http.get<User>('http://localhost:8080/user/ident/alvaro').pipe()
}

 create(user: User) {
   return this.http.post<User>('http://localhost:8080/user/add', user, this.httpOptions).pipe()
 }

 delete(IdUser: number) {
   return this.http.post<User>('http://localhost:8080/user/delete/'+IdUser, IdUser, this.httpOptions).pipe()
 }

 update(user: User) {
   return this.http.put<User>('http://localhost:8080/user/update', user, this.httpOptions).pipe()
 }

 loginyo(login: String, password: String) {
  return this.http.post<User>(this.baseUrl+"user/login", login).pipe()
}

loginser(login: Login) {
  console.log("entro en userService para redirigir a Spring (8080) con user :"+login.identifUser+" et password :"+login.motDePass)
  console.log(login)
  //return this.http.get<User>('http://localhost:8080/user/4').pipe()  //esta funcionaba en getAll. aqui tambien pasa!!
  //return this.http.post<User>('http://localhost:8080/role/delete/6', this.httpOptions).pipe()  //no funciona tampoco
  //this.us =this.http.post<User>('http://localhost:8080/user/login', login, this.httpOptions).pipe();  //this.baseUrl+'user/login'
  //this.lo =this.http.post<User>('http://localhost:8080/user/login', login, this.httpOptions).pipe();
  console.log(this.http.post<User>('http://localhost:8080/user/login', login, this.httpOptions).pipe())
  return this.http.post<User>('http://localhost:8080/user/login', login).pipe()
  //return this.http.get<User>('http://localhost:8080/user/4').pipe()
}

}
