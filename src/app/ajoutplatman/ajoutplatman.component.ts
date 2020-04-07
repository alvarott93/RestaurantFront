import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PlatService } from '../services/plat.service';
import { Plat } from '../models/plat';


@Component({
  selector: 'app-ajoutplatman',
  templateUrl: './ajoutplatman.component.html',
  styleUrls: ['./ajoutplatman.component.css']
})
export class AjoutplatmanComponent implements OnInit {

  newPlat: Plat= new Plat()

  constructor(private platService: PlatService) { }




  createPlat(){

    if (this.newPlat.nomPlat==null || this.newPlat.prixPlat==null || this.newPlat.prixPlat<=0.0) {
      this.newPlat.nomPlat=null
      this.newPlat.prixPlat=null
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Il y a des champs pas ou mal remplis',
        footer: '<a href>Pourriez-vous remplir le nom du plat et le prix?</a>'
      })
    }

    else { 
    console.log("bouton en marche")
    this.platService.create(this.newPlat).subscribe(
      data => {
        console.log(data)
        if (data['idPlat'] == 0) {
        } 
        else if (data['idPlat']){

          Swal.fire(
            'Plat ajouté!',
            this.newPlat.nomPlat+' a bien été ajouté!',
            'success'
          ).then( () => {
          console.log("Validation")
          localStorage.setItem("managerajoutplat", "yes")
          window.location.href = "http://localhost:4200/"
          }
          )
        }
      }

    )
  }
  }

  ngOnInit(): void {
  }

}
