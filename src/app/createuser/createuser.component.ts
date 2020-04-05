import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { RoleService } from '../services/role.service';

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
    this.roleService.getById(1).subscribe(
      data => {    // COGER IDEA PARA OTRAS VECES PARA CUANDO NO HAYA TABLEEEEEEE
        if (data) {
        this.usertest.roleUser = data;
  } },error => { console.log("error asignando role Client")    },() => {
    this.userService.create(this.usertest).subscribe(
      data => {    // COGER IDEA PARA OTRAS VECES PARA CUANDO NO HAYA TABLEEEEEEE
        if (data) {
        this.usertest = data;
  } },error => { console.log("error creando user")    },() => {
        localStorage.setItem("usercrea", null);
        window.location.href = 'http://localhost:4200/sidebar'
     
      }
    )

  }
  )


  }

  signin() {
    localStorage.setItem("usercrea", null);
    window.location.href = 'http://localhost:4200/sidebar'
  }

  ngOnInit(): void {
  }

}
