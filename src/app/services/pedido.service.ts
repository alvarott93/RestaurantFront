import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Login } from '../models/login';
import { Role } from '../models/role';
import { Observable } from "rxjs";
import { Pedido } from '../models/pedido';
import { Commande } from '../models/commande';
import { Plat } from '../models/plat';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Pedido[]>('http://localhost:8080/pedido/all').pipe()
  }

  getByCom(commande: Commande) {
    return this.http.post<Pedido[]>('http://localhost:8080/pedido/parCom', commande).pipe()
  }



  getByIdentUser(identUser: String) {
    return this.http.get<Pedido[]>('http://localhost:8080/pedido/'+identUser).pipe()
  }

  getByComAndPlat(idCommande: number, idPlat: number) {
    console.log("el pedido  que busco en Spring tiene commande con id: "+idCommande+" y el plato: "+idPlat)
    return this.http.get<Pedido>('http://localhost:8080/pedido/parPlatandCom/'+idCommande+"/"+idPlat).pipe()
  }

  

 create(pedido: Pedido) {
   return this.http.post<Pedido>('http://localhost:8080/pedido/add', pedido).pipe()
 }

 delete(pedido: Pedido) {
   console.log("delete antes de pasar por spring, con plato: "+pedido.platPedido.nomPlat)
  return this.http.post<Pedido>('http://localhost:8080/pedido/delete', pedido).pipe()
}



}
