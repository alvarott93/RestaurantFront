import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Login } from '../models/login';
import { Role } from '../models/role';
import { Observable } from "rxjs";
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Reservation[]>('http://localhost:8080/reservation/all').pipe()
  }

 getByuser(user: User) {
   return this.http.post<Reservation>('http://localhost:8080/reservation/parUser', user).pipe()
 }

 getById(idReservation: number) {
  return this.http.get<Reservation>('http://localhost:8080/reservation/'+idReservation).pipe()
}

 create(reservation: Reservation) {
   return this.http.post<Reservation>('http://localhost:8080/reservation/add', reservation).pipe()
 }

 update(reservation: Reservation) {
  return this.http.post<Reservation>('http://localhost:8080/reservation/add', reservation).pipe()
}

 delete(idReservation: number) {
   return this.http.post<Reservation>('http://localhost:8080/reservation/delete/'+idReservation, idReservation).pipe()
 }



}
