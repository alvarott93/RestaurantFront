import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Login } from '../models/login';
import { Role } from '../models/role';
import { Observable } from "rxjs";
import { Tables } from '../models/tables';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Tables[]>('http://localhost:8080/table/all').pipe()
  }

  getById(idTable: number) {
    return this.http.get<Tables>('http://localhost:8080/table/parid/'+idTable).pipe()
  }

 getByCaptable(captable: number) {
   return this.http.get<Tables>('http://localhost:8080/table/'+captable).pipe()
 }

 create(tables: Tables) {
   return this.http.post<Tables>('http://localhost:8080/table/add', tables).pipe()
 }

 delete(Idtable: number) {
   return this.http.post<Tables>('http://localhost:8080/table/delete/'+Idtable, Idtable).pipe()
 }


}
