import { Component, OnInit } from '@angular/core';
import { FactureService } from '../services/facture.service';
import { UserService } from '../services/user.service';
import { ReservationService } from '../services/reservation.service';
import { CommandeService } from '../services/commande.service';
import { PlatService } from '../services/plat.service';
import { PedidoService } from '../services/pedido.service';
import { Facture } from '../models/facture';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-obtainfacture',
  templateUrl: './obtainfacture.component.html',
  styleUrls: ['./obtainfacture.component.css']
})
export class ObtainfactureComponent implements OnInit {

  listFactures: Facture[] = []
  listPedidos: Pedido[] = []
  facture1: Facture

  constructor(private pedidoService: PedidoService, private platService: PlatService, private commandeService: CommandeService, private reservationService: ReservationService, private userService: UserService , private factureService: FactureService) { }

  platsfacture(facture: Facture){
    var a=0;
    if (this.facture1==facture && this.listPedidos!=null) {
      var a=1;
    }

    this.pedidoService.getByCom(facture.commandeFacture).subscribe(
      data => {
        this.listPedidos=data;
      } ,error => {    console.log("Ha habido un errooooooooooooooor apertura 2")   },() => {  

        if (a==1) {
          this.listPedidos=null
        }
        this.facture1=facture;

      }
    )

  }


  ngOnInit(): void {
    this.factureService.getByIdentUser(localStorage.getItem("user")).subscribe(   
      data => {
        this.listFactures=data;
        
      } ,error => { console.log("Ha habido un errooooooooooooooor ")  },() => {  // Apertura 2
  }  
  )
  }

}
