import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FairecommandeComponent } from './fairecommande/fairecommande.component';
import { FairereservationComponent } from './fairereservation/fairereservation.component';
import { ObtainfactureComponent } from './obtainfacture/obtainfacture.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { ListplatsmanComponent } from './listplatsman/listplatsman.component';
import { AjoutplatmanComponent } from './ajoutplatman/ajoutplatman.component';
import { ListtablesmanComponent } from './listtablesman/listtablesman.component';
import { AjouttablemanComponent } from './ajouttableman/ajouttableman.component';
import { ListusersmanComponent } from './listusersman/listusersman.component';



const routes: Routes = [
  {
    path : "login",     //lo que va en la url con 4200, y dirige a el component
    component : LoginComponent
  },
  {
    path : "createuser",     
    component : CreateuserComponent
  },

  {
    path : "homepage",    
    component : HomepageComponent
  },
  {
    path : "obtenirfacture",    
    component : ObtainfactureComponent
  },
  {
    path : "fairecommandeclient",    
    component : FairecommandeComponent
  },
  {
  path : "fairereservationclient",    
  component : FairereservationComponent
},
{
  path : "listplatsman",    
  component : ListplatsmanComponent
},
{
  path : "ajoutplatman",    
  component : AjoutplatmanComponent
},
{
  path : "listtablesman",    
  component : ListtablesmanComponent
},
{
  path : "ajouttableman",    
  component : AjouttablemanComponent
},
{
  path : "listusersman",    
  component : ListusersmanComponent
},
  {
    path : "sidebar", 
    component : SidebarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
