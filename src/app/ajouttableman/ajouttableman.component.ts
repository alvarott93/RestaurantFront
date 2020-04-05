import { Component, OnInit } from '@angular/core';
import { TablesService } from '../services/tables.service';
import { Tables } from '../models/tables';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouttableman',
  templateUrl: './ajouttableman.component.html',
  styleUrls: ['./ajouttableman.component.css']
  
})
export class AjouttablemanComponent implements OnInit {

  newTables: Tables= new Tables()

  constructor(private tablesService: TablesService) { }

  


  createTable(){
    console.log("bouton en marche")
    var nume=this.newTables.numTables;



   
    this.tablesService.getByCaptable(this.newTables.capTables).subscribe(
      
      data => {
        if (data!=null) { 
        this.newTables=data; 
        this.newTables.numTables=nume; }
        
      } ,error => {    console.log("Ha habido un errooooooooooooooor apertura 2")   },() => {  
    this.tablesService.create(this.newTables).subscribe(
      data => {
        console.log(data)
        if (data['idTables'] == 0) {
        } 
        else if (data['idTables']){

          Swal.fire(
            'Table ajoutée!',
            "table avec capacité "+this.newTables.capTables+' a bien été ajouté!',
            'success'
          ).then( () => {
          console.log("Validation")
          localStorage.setItem("managerajouttable", "yes")
          window.location.href = "http://localhost:4200/"
          }
          )
        }
      }

    )
  } 
  
  )
  }

  ngOnInit(): void {
  }

}
