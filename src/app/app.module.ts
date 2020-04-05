

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HttpClientModule } from '@angular/common/http';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
//import {DemoMaterialModule} from './app/material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { HomepageComponent } from './homepage/homepage.component';
import { FairecommandeComponent } from './fairecommande/fairecommande.component';
import { FairereservationComponent } from './fairereservation/fairereservation.component';
import { ObtainfactureComponent } from './obtainfacture/obtainfacture.component';
import {CalendarModule} from 'primeng/calendar';
import { CreateuserComponent } from './createuser/createuser.component';
import { ListplatsmanComponent } from './listplatsman/listplatsman.component';
import { AjoutplatmanComponent } from './ajoutplatman/ajoutplatman.component';
import { ListtablesmanComponent } from './listtablesman/listtablesman.component';
import { AjouttablemanComponent } from './ajouttableman/ajouttableman.component';
import { ListusersmanComponent } from './listusersman/listusersman.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HomepageComponent,
    FairecommandeComponent,
    FairereservationComponent,
    ObtainfactureComponent,
    CreateuserComponent,
    ListplatsmanComponent,
    AjoutplatmanComponent,
    ListtablesmanComponent,
    AjouttablemanComponent,
    ListusersmanComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule, 
    MatNativeDateModule,
    ReactiveFormsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


