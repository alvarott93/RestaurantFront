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
  listRoles : Role[] = []

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
    var s3= idUser.toString()+"c"
    var s4= idUser.toString()+"d"
    var s5= idUser.toString()+"e"
    var but = idUser.toString()+"button"
    console.log("la clase transformada a string es :"+s)
    console.log("el id del boton  es :"+but)
    var a = document.getElementById(s);
    var aa = document.getElementById(s2);
    var aaa = document.getElementById(s3);
    var aaaa = document.getElementById(s4);
    var aaaaa = document.getElementById(s5);
    var button = document.getElementById(but);

   

    this.roleService.getByrolename(user.roleUser.nomRole).subscribe(
      data => {
        user.roleUser=data;
      } ,error => {    console.log("Ha habido un errooooooooooooooor apertura 2")   },() => {  



  
     if (button.style.backgroundColor == "red") {
      
      let us  
       this.userService.getById(idUser).subscribe(
         data => {
           us = data
         }
       );
      this.userService.create(user).subscribe(  
        data => {
          console.log(data)
        }
      )
      localStorage.setItem("managerlistusers", "yes")
      window.location.href = 'http://localhost:4200/'
     }
  
    a.style.display = "block";
    aa.style.display = "block";
    aaa.style.display = "block";
    aaaa.style.display = "block";
    aaaaa.style.display = "block";
    button.style.backgroundColor = "red";
    button.textContent= "Confirmer";
  } )
}
else { console.log("error writing the role")}
  }

  ngOnInit(): void {

    this.userService.getAll().subscribe(   
      data => {
        this.listUsers=data;
        
      } ,error => { console.log("Ha habido un errooooooooooooooor ")  },() => {

        this.roleService.getAll().subscribe(   
          data => {
            this.listRoles=data;
          } ,error => { console.log("Ha habido un errooooooooooooooor  222")  },() => {

          }
          )

 
      }
      )
    }
  }

