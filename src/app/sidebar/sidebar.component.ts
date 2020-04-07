import { ChangeDetectorRef, OnInit, Component, OnDestroy, ɵConsole } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public clientfun;
  serveurfun;
  managerfun;
  clientreser;
  clientcomman; 
  createuser;
  outhomepage;
  clientfactu;
  managerlistplats;
  managerajoutplat;
  managerlisttables;
  managerajouttable;
  managerlistusers;



  ngOnInit(): void {

  this.clientfun = false;
  this.serveurfun = false;
  this.managerfun = false;
  this.clientreser = false;
  this.clientcomman = false;
  this.createuser=false;
  this.clientfactu=false;
  this.outhomepage=false;

    if (localStorage.getItem("user")==null && localStorage.getItem("usercrea")=="yes") {
      this.createuser=true;
    }

      else{

     
    if (localStorage.getItem("role")=="Client") {
      this.clientfun = true;
      this.serveurfun = false;
      this.managerfun = false;
      this.clientreser = false;
      this.clientcomman = false;

      if (parseInt(localStorage.getItem("idReserv"))!=0) {  // NUEVOOOO
        this.clientreser = false;
        this.clientcomman = true;
      }


    }

    else if (localStorage.getItem("role")=="Serveur") {
      this.clientfun = false;
      this.serveurfun = true;
      this.managerfun = false;
      this.clientreser = false;
      this.clientcomman = false;
    }

    else if (localStorage.getItem("role")=="Manager") {
      this.clientfun = false;
      this.serveurfun = false;
      this.managerfun = true;
    } else{}


    if (localStorage.getItem("outhome")=="yes") {
      this.outhomepage=true;
    }


    if (localStorage.getItem("managerlistplats")=="yes") {
      this.managerlistplats=true;
      localStorage.setItem("managerlistplats", "no")
    }

    if (localStorage.getItem("managerajoutplat")=="yes") {
      this.managerajoutplat=true;
      localStorage.setItem("managerajoutplat", "no")
    }

    if (localStorage.getItem("managerlisttables")=="yes") {
      this.managerlisttables=true;
      localStorage.setItem("managerlisttables", "no")
    }

    if (localStorage.getItem("managerajouttable")=="yes") {
      this.managerajouttable=true;
      localStorage.setItem("managerajouttable", "no")
    }

    if (localStorage.getItem("managerlistusers")=="yes") {
      this.managerlistusers=true;
      localStorage.setItem("managerlistusers", "no")
    }

      }// cierre del if que verifica si hay un usuario

     }  //esteeeeee cierra  OnInit


     listplats() {
      localStorage.setItem("outhome", "yes")
      this.outhomepage=true;
      this.managerlistplats=true;
      this.managerajoutplat=false;
      this.managerlisttables=false;
      this.managerajouttable=false;
      this.managerlistusers=false;
     }

     ajoutplat() {
      localStorage.setItem("outhome", "yes")
      this.outhomepage=true;
      this.managerlistplats=false;
      this.managerajoutplat=true;
      this.managerlisttables=false;
      this.managerajouttable=false;
      this.managerlistusers=false;
     }

      listtables() {
        localStorage.setItem("outhome", "yes")
        this.outhomepage=true;
        this.managerlistplats=false;
        this.managerajoutplat=false;
        this.managerlisttables=true;
        this.managerajouttable=false;
        this.managerlistusers=false;
      }

       ajouttable(){
        localStorage.setItem("outhome", "yes")
        this.outhomepage=true;
        this.managerlistplats=false;
        this.managerajoutplat=false;
        this.managerlisttables=false;
        this.managerajouttable=true;
        this.managerlistusers=false;
       }

       listusers() {
        localStorage.setItem("outhome", "yes")
        this.outhomepage=true;
        this.managerlistplats=false;
        this.managerajoutplat=false;
        this.managerlisttables=false;
        this.managerajouttable=false;
        this.managerlistusers=true;
       }


  
  hacercoman() {

    localStorage.setItem("outhome", "yes")
    this.outhomepage=true;
    this.clientreser = false;
    this.clientcomman = true;
    this.clientfactu=false;
    
}

listfactures() {
  this.outhomepage=true;
  this.clientreser = false;
  this.clientcomman = false;
  this.clientfactu=true;
  localStorage.setItem("outhome", "yes")
}

logout() {
  localStorage.clear();
  window.location.href = 'http://localhost:4200'
}

hacerreser() {
  localStorage.setItem("outhome", "yes")
  this.outhomepage=true;
  this.clientreser = true;
  this.clientcomman = false;
  this.clientfactu=false;
}

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true; 

}