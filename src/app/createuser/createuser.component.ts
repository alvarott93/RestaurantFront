import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { RoleService } from '../services/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {

  loginuser : Login = new Login();
  userLoggedIn : User  = new User();
  usertest: User= new User();

  constructor(private loginService : LoginService, private userService: UserService, private roleService: RoleService) { }

  createuser() {

    if (this.usertest.identifUser==null || this.usertest.mailUser==null || this.usertest.motDePass==null || this.usertest.nomUser==null || this.usertest.prenomUser==null) {
      this.usertest.identifUser=null;
      this.usertest.mailUser=null;
      this.usertest.motDePass=null;
      this.usertest.nomUser=null;
      this.usertest.prenomUser=null;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Il y a des champs pas remplis',
        footer: '<a href>Pourriez-vous les remplir?</a>'
      })
    }

    else { 

    this.roleService.getById(1).subscribe(
      data => {    
        if (data) {
        this.usertest.roleUser = data;
  } },error => { console.log("error asignando role Client")    
},() => {
    this.userService.create(this.usertest).subscribe(
      data => {    
        if (data) {
        this.usertest = data;
        localStorage.setItem("usercrea", null);
        window.location.href = 'http://localhost:4200/sidebar'
  } },error => { console.log("error creando user")   
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Le username est déjà utilisé, desolé!',
    footer: '<a href>Pourriez-vous choisir un autre?</a>'
  })
 },() => {
     
      }
    )

  }
  )

  }
  }

  signin() {
    localStorage.setItem("usercrea", null);
    window.location.href = 'http://localhost:4200/sidebar'
  }

  ngOnInit(): void {
  }

}
