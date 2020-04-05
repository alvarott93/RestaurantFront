import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Login } from '../models/login';
import { Role } from '../models/role';
import { Observable } from "rxjs";
import { Plat } from '../models/plat';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Plat[]>('http://localhost:8080/plat/all').pipe()
  }

  getById(idPlat: number) {
    return this.http.get<Plat>('http://localhost:8080/plat/'+idPlat).pipe()
  }

 
 create(plat: Plat) {
   return this.http.post<Plat>('http://localhost:8080/plat/add', plat).pipe()
 }


 delete(idPlat: number) {
  console.log("voy a borrar plato con id estoy en platservice :"+idPlat)
   return this.http.post<Plat>('http://localhost:8080/plat/delete/'+idPlat, idPlat).pipe()
 }



}
