import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Login } from '../models/login';
import { Role } from '../models/role';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Role[]>('http://localhost:8080/role/all').pipe()
  }

 getById(idRole: number) {
   return this.http.get<Role>('http://localhost:8080/role/'+idRole).pipe()
 }

 getByrolename(nomRole: String) {
  return this.http.get<Role>('http://localhost:8080/role/name/'+nomRole).pipe()
}

 create(role: Role) {
   return this.http.post<Role>('http://localhost:8080/role/add', role).pipe()
 }

 delete(IdRole: number) {
   return this.http.post<Role>('http://localhost:8080/role/delete/'+IdRole, IdRole).pipe()
 }



}
