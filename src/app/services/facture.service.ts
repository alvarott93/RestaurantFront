import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Login } from '../models/login';
import { Role } from '../models/role';
import { Observable } from "rxjs";
import { Facture } from '../models/facture';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http:HttpClient) { }


  getAll(){
    return this.http.get<Facture[]>('http://localhost:8080/facture/all').pipe()
  }

  getByCom(commande: Commande) {
    return this.http.post<Facture>('http://localhost:8080/facture/parCom', commande).pipe()
  }

  getByIdentUser(identUser: String) {
    return this.http.get<Facture[]>('http://localhost:8080/facture/'+identUser).pipe()
  }


 create(facture: Facture) {
   console.log("paso por create facture, una factura con precio total:  "+facture.prixTotal)
   return this.http.post<Facture>('http://localhost:8080/facture/add', facture).pipe()
 }



 
}
