import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2'
import { Tables } from '../models/tables';
import { RoleService } from '../services/role.service';
import { Role } from '../models/role';

@Component({
  selector: 'app-listusersman',
  templateUrl: './listusersman.component.html',
  styleUrls: ['./listusersman.component.css']
})
export class ListusersmanComponent implements OnInit {

  listUsers: User[] = [];
  user: User = new User();
  role: Role = new Role();

  constructor(private userService: UserService, private roleService: RoleService) { }

  deleteUser(user: User){
    console.log("bouton delete user en marche")

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        console.log("voy a borrar user con id :"+user.idUser)
        this.userService.delete(user.idUser).subscribe(   //this.medecin
          data => {
            console.log(data)
          }
        )
        Swal.fire(
          'User deleted!',
          'Your file has been deleted.',
          'success'
        )
        localStorage.setItem("managerlistusers", "yes")
        window.location.href = 'http://localhost:4200/'
      }
    })
    
  }


  ShowHideDivmarche(idUser : number, user: User) {

    if (user.roleUser.nomRole==("Client") || user.roleUser.nomRole==("Serveur") || user.roleUser.nomRole==("Manager")) { 

    console.log("la clase que paso es: "+idUser)
    var s= idUser.toString()+"a"
    var s2= idUser.toString()+"b"
    var but = idUser.toString()+"button"
    console.log("la clase transformada a string es :"+s)
    console.log("el id del boton  es :"+but)
    var a = document.getElementById(s);
    var aa = document.getElementById(s2);
    var button = document.getElementById(but);

    //buscar id con role

    this.roleService.getByrolename(user.roleUser.nomRole).subscribe(
      data => {
        //this.role=data;
        user.roleUser=data;
      } ,error => {    console.log("Ha habido un errooooooooooooooor apertura 2")   },() => {  



  
     if (button.style.backgroundColor == "red") {
      console.log("Actualisation de l'information")
      //this.hopital  = this.hopitalService.getById(idhopital);
      
      let us  //si quiero buscar el objeto hopital con el ID!!!!!!!!!!!!!!!!!!!!!!!!
       this.userService.getById(idUser).subscribe(
         data => {
           us = data
         }
       );
      
      console.log("test")
      this.userService.create(user).subscribe(  
        //this.hopitalService.update(this.hopitalService.getById(idhopital)).subscribe(
        data => {
          console.log(data)
        }
      )
      localStorage.setItem("managerlistusers", "yes")
      window.location.href = 'http://localhost:4200/'
     }
  
    a.style.display = "block";
    aa.style.display = "block";
    button.style.backgroundColor = "red";
    button.textContent= "Confirmer";
  } )
}
else { console.log("error writing the role")}
  }

  ngOnInit(): void {

    this.userService.getAll().subscribe(
      data => {
           this.listUsers = data; 

      }
    )
  }

}