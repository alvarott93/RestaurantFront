import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Login } from '../models/login';
import { Role } from '../models/role';
import { Observable } from "rxjs";
import { Commande } from '../models/commande';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Commande[]>('http://localhost:8080/commande/all').pipe()
  }

 getByreserv(reserv: Reservation) {
   return this.http.post<Commande>('http://localhost:8080/commande/parreserv', reserv).pipe()
 }

 create(commande: Commande) {
   return this.http.post<Commande>('http://localhost:8080/commande/add', commande).pipe()
 }



 update(commande: Commande) {
  return this.http.post<Commande>('http://localhost:8080/commande/add', commande).pipe()
}

 delete(IdCommande: number) {
   return this.http.post<Commande>('http://localhost:8080/commande/delete/'+IdCommande, IdCommande).pipe()
 }



}
