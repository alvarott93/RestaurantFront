import { Component, OnInit } from '@angular/core';
import { TablesService } from '../services/tables.service';
import { Tables } from '../models/tables';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listtablesman',
  templateUrl: './listtablesman.component.html',
  styleUrls: ['./listtablesman.component.css']
})
export class ListtablesmanComponent implements OnInit {


  listTables: Tables[] = [];
  tables: Tables = new Tables();

  constructor(private tablesService: TablesService) { }

  deleteTable(tables: Tables){
    console.log("bouton delete table en marche")

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
        console.log("voy a borrar table con id :"+tables.idTables)
        this.tablesService.delete(tables.idTables).subscribe(   //this.medecin
          data => {
            console.log(data)
          }
        )
        Swal.fire(
          'Table deleted!',
          'Your file has been deleted.',
          'success'
        )
        localStorage.setItem("managerlisttables", "yes")
        window.location.href = 'http://localhost:4200/'
      }
    })
    
  }


  ShowHideDivmarche(idTables : number, tables: Tables) {
    console.log("la clase que paso es: "+idTables)
    var s= idTables.toString()+"a"
    var s2= idTables.toString()+"b"
    var but = idTables.toString()+"button"
    console.log("la clase transformada a string es :"+s)
    console.log("el id del boton  es :"+but)
    var a = document.getElementById(s);
    var aa = document.getElementById(s2);
    var button = document.getElementById(but);
  
     if (button.style.backgroundColor == "red") {
      console.log("Actualisation de l'information")
      //this.hopital  = this.hopitalService.getById(idhopital);
      
      let tab   //si quiero buscar el objeto hopital con el ID!!!!!!!!!!!!!!!!!!!!!!!!
       this.tablesService.getById(idTables).subscribe(
         data => {
           tab = data
         }
       );
      
      console.log("test")
      this.tablesService.create(tables).subscribe(  
        //this.hopitalService.update(this.hopitalService.getById(idhopital)).subscribe(
        data => {
          console.log(data)
        }
      )
      localStorage.setItem("managerlisttables", "yes")
      window.location.href = 'http://localhost:4200/'
     }
  
    a.style.display = "block";
    aa.style.display = "block";
    button.style.backgroundColor = "red";
    button.textContent= "Confirmer";
  }

  ngOnInit(): void {

    this.tablesService.getAll().subscribe(
      data => {
           this.listTables = data; 

      }
    )
  }

}
