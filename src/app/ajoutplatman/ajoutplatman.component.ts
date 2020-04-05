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

  ngOnInit(): void {
  }

}
