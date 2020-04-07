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
      title: 'Tu es sur?',
      text: "Cette decision sera irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, eliminer!'
    }).then((result) => {
      if (result.value) {
        this.platService.delete(plat.idPlat).subscribe(   //this.medecin
          data => {
            console.log(data)
          }
        )
        Swal.fire(
          'Plat eliminé!',
          'Le plat a été bien eliminé.',
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
      let pla   
       this.platService.getById(idPlat).subscribe(
         data => {
           pla = data
         }
       );
  
      this.platService.create(plat).subscribe(  
        data => {
          console.log(data)
        }
      )
      localStorage.setItem("managerlistplats", "yes")
      window.location.href = 'http://localhost:4200/'
     }

    a.style.display = "block";
    aa.style.display = "block";
    aaa.style.display = "block";
    button.style.backgroundColor = "red";
    button.textContent= "Confirmer";
  }



  ngOnInit(): void {
        this.platService.getAll().subscribe(
          data => {
               this.listPlats = data;  
          }
        )
  }

}
