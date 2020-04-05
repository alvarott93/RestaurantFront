import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginuser : Login = new Login();
  userLoggedIn : User  = new User();
  logintest: Login= new Login();

  constructor(private loginService : LoginService, private userService: UserService) { }

  
  login() {
    console.log("user : "+this.logintest.identifUser+" password : "+this.logintest.motDePass)
    //this.userLoggedIn.identifUser="aaa";
    //this.userLoggedIn.passwordUser="bbb";
    this.userService.loginser(this.logintest).subscribe(
      data => {
        if (data) {
        this.userLoggedIn = data;
        localStorage.setItem("user", this.userLoggedIn.identifUser);  //REACTIVAR ESTO LUEGO!!!!!!

        
        localStorage.setItem("role", this.userLoggedIn.roleUser.nomRole)  
       

        window.location.href = 'http://localhost:4200/sidebar'  //esto hace falta realmente???
        


      }

      ///para ver si hay algo, localstorage.getitem y vemos si hay algo.

      },error => {
        // cas ou le subscribe échoue
      },() => {

        // cas ou ça finit
        console.log("he pasado por Spring!!!!!!!!!!!!!")
      console.log(this.userLoggedIn)
     console.log("user : "+this.userLoggedIn.identifUser+" password : "+this.userLoggedIn.motDePass)
     
      }
    )


  }

  createuser() {
    localStorage.setItem("usercrea", "yes");
    window.location.href = 'http://localhost:4200/sidebar'
  }

  logout() {   //il s'agit de vider le localstorage
  localStorage.clear();
  }

  ngOnInit(): void {
  }

}
