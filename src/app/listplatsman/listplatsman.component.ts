import { Component, OnInit } from '@angular/core';
import { Plat } from '../models/plat';
import { PlatService } from '../services/plat.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listplatsman',
  templateUrl: './listplatsman.component.html',
  styleUrls: ['./listplatsman.component.css']
})
export class ListplatsmanComponent implements OnInit {

  listPlats : Plat[] = [];
  plat: Plat = new Plat();

  constructor(private platService: PlatService) { }

  deletePlat(plat: Plat){
    console.log("bouton delete plat en marche")

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
        console.log("voy a borrar plato con id :"+plat.idPlat)
        this.platService.delete(plat.idPlat).subscribe(   //this.medecin
          data => {
            console.log(data)
          }
        )
        Swal.fire(
          'Plate deleted!',
          'Your file has been deleted.',
          'success'
        )
        localStorage.setItem("managerlistplats", "yes")
        window.location.href = 'http://localhost:4200/'
      }
    })
    
  }


  ShowHideDivmarche(idPlat : number, plat: Plat) {
    console.log("la clase que paso es: "+idPlat)
    var s= idPlat.toString()+"a"
    var s2= idPlat.toString()+"b"
    var s3= idPlat.toString()+"c"
    var but = idPlat.toString()+"button"
    console.log("la clase transformada a string es :"+s)
    console.log("el id del boton  es :"+but)
    var a = document.getElementById(s);
    var aa = document.getElementById(s2);
    var aaa = document.getElementById(s3);
    var button = document.getElementById(but);
  
     if (button.style.backgroundColor == "red") {
      console.log("Actualisation de l'information")
      //this.hopital  = this.hopitalService.getById(idhopital);
      
      let pla   //si quiero buscar el objeto hopital con el ID!!!!!!!!!!!!!!!!!!!!!!!!
       this.platService.getById(idPlat).subscribe(
         data => {
           pla = data
         }
       );
      
      console.log("test")
      this.platService.create(plat).subscribe(  
        //this.hopitalService.update(this.hopitalService.getById(idhopital)).subscribe(
        data => {
          console.log(data)
        }
      )
      localStorage.setItem("managerlistplats", "yes")
      window.location.href = 'http://localhost:4200/'
     }
  
    //dvPassport.style.display = btnPassport.value == "Yes" ? "block" : "none";
    a.style.display = "block";
    aa.style.display = "block";
    aaa.style.display = "block";
    button.style.backgroundColor = "red";
    button.textContent= "Confirmer";
  }



  ngOnInit(): void {


        // this.listHopitaux = this.hopitalService.getAll() esto no funciona, no es como java!!
        this.platService.getAll().subscribe(
          data => {
               this.listPlats = data;  //cuando tengas data, la metes en listHopitaux. data representa el retour, y lo que hay en la flecha es lo que
               //vamos a hacer. 
    
          }
        )
  }

}
