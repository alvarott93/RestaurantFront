import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../models/pedido';
import { Plat } from '../models/plat';
import { PlatService } from '../services/plat.service';
import Swal from 'sweetalert2'
import { CommandeService } from '../services/commande.service';
import { Commande } from '../models/commande';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../services/reservation.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Facture } from '../models/facture';
import { FactureService } from '../services/facture.service';

@Component({
  selector: 'app-fairecommande',
  templateUrl: './fairecommande.component.html',
  styleUrls: ['./fairecommande.component.css']
})
export class FairecommandeComponent implements OnInit {

  activsub;
  activsub2;
  listPlats : Plat[] = []
  listPedidos: Pedido[] = []
  newPedido : Pedido= new Pedido();
  commande1: Commande
  reservation1: Reservation
  user1: User
  facture1: Facture
  pedido1: Pedido
  
  
  

  constructor(private pedidoService: PedidoService, private platService: PlatService, private commandeService: CommandeService, private reservationService: ReservationService, private userService: UserService , private factureService: FactureService ) { }
  obtenirfacture(){
    this.activsub=false
    Swal.fire({
      title: 'Voulez- vous vraiment finir votre commande?',
      text: "Votre commande ne pourra plus être modifiée!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, commander!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Commande faite!',
          'On va preparer votre repas!',
          'success'
        )
        localStorage.setItem("outhome", "no")
        window.location.href = 'http://localhost:4200/sidebar'
      }
    })
  }

  supprimerPlat(unPedido) {
    this.facture1.prixTotal=this.facture1.prixTotal-unPedido.platPedido.prixPlat*unPedido.quantityPlatpedido;
    this.factureService.create(this.facture1).subscribe(
      data => {
        this.facture1=data;
      } ,error => {    console.log("Ha habido un errooooooooooooooor ")   },() => {  } )


    console.log("activo funcion eliminar pedido")
    this.pedidoService.delete(unPedido).subscribe(   
      data => {
        this.newPedido=data;
      } ,error => { console.log("Ha habido un errooooooooooooooor ")  },() => {   //Apertura 1
        this.pedidoService.getByCom(this.commande1).subscribe(   
          data => {
            this.listPedidos=data;
            
          } ,error => { console.log("Ha habido un errooooooooooooooor ")  },() => {  // Apertura 2


      }  // Cierre 2
      )

    }  // Cierre 1
    )

  }

  ajoutPlat(plat: Plat){
    this.activsub=true
    console.log("el id de la factura presente es "+this.facture1.idfacture) //no esta, hay que cargarla
    this.facture1.prixTotal=this.facture1.prixTotal+plat.prixPlat; // esto despues de cargarla
        this.factureService.create(this.facture1).subscribe(
      data => {
        this.facture1=data;

      } ,error => {    console.log("Ha habido un errooooooooooooooor apertura 2")   },() => {  
    this.pedidoService.getByComAndPlat(this.commande1.idCommande, plat.idPlat).subscribe(
      data => {
        this.pedido1=data;    //tener cuidado con que de tiempo a meter los datos en caso de fallo, es una promesa!!
      } ,error => {      console.log("Ha habido un errooooooooooooooor 111111111111")  },() => {   // Apertura 1
    if (this.pedido1==null) {   // s'il n'existe pas, je le cree, je l'asigne le plat, la commande, et une quantité de 1.
    this.pedido1= new Pedido();
     this.pedido1.commandePedido=this.commande1;
     this.pedido1.platPedido=plat;
     this.pedido1.quantityPlatpedido=1; } 
     else {
      this.pedido1.quantityPlatpedido=this.pedido1.quantityPlatpedido+1;}
      console.log("test 1")
      this.pedido1.facturePedido=this.facture1;
      console.log(" id facture en pedido"+this.pedido1.facturePedido.idfacture)
      console.log("test 2")
     this.pedidoService.create(this.pedido1).subscribe(    //falta de cerrar subscribe y data!!!
       data => {
         this.pedido1=data
         console.log("test 3")
       } ,error => {      console.log("Ha habido un errooooooooooooooor 222222222222")  },() => {    // Apertura 2
        this.pedidoService.getByCom(this.commande1).subscribe(   //pour afficher la nouvelle liste des plats demandés
          data => {
            this.listPedidos=data;
          } ,error => {      console.log("Ha habido un errooooooooooooooor 33333333")  },() => {   //Apertura 3

       }  // Cierre3
     )

    }  // Cierre2
    )

  }  // Cierre1
  )
       
} // Cierre 0
)

    } // Cierre funcion ajoutplat


   



  ngOnInit(): void {

     if (parseInt(localStorage.getItem("idReserv"))==0) {
    console.log("Commande pour emporter!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    this.activsub=false
    this.activsub2=false
     this.reservation1=new Reservation();
     this.user1= new User();
    this.userService.getByIdent(localStorage.getItem("user")).subscribe(
      data => {
        
        this.reservation1.userRes=data
        
        this.user1=data
        
      } ,error => { console.log("Ha habido un errooooooooooooooor") },() => {   //Apertura 1
     this.reservationService.create(this.reservation1).subscribe(
       data => {
         this.reservation1=data
       }
       ,error => { 
        console.log("Ha habido un errooooooooooooooor") 
      },() => {   //Apertura 2

    this.commande1= new Commande();
    this.commande1.reservCommande=this.reservation1
    this.commande1.indications= "indicacion test";
  
    this.commandeService.create(this.commande1).subscribe(
      data => {
        this.commande1=data;
      } ,error => { console.log("Ha habido un errooooooooooooooor apertura 2") 
      },() => {    //Apertura 3

    this.facture1 = new Facture();
    this.facture1.commandeFacture=this.commande1
    this.facture1.prixTotal=0;
    this.factureService.create(this.facture1).subscribe(
      data => {
        this.facture1=data;

      } ,error => {    console.log("Ha habido un errooooooooooooooor apertura 2")   },() => {  } )
    this.platService.getAll().subscribe(
      data => {
        this.listPlats = data;
      }
      )   


    }    // Cierre 3
    )    


    }     // Cierre 2
    )

    }     // Cierre 1
    )


  }  // Cierre del if , de comanda sin reserva

  else {  // en el caso de tener una reserva
    this.reservationService.getById(parseInt(localStorage.getItem("idReserv"))).subscribe(
      data => {
        this.reservation1=data
      } ,error => {   console.log("Ha habido un errooooor 111111111")  },() => {   //Apertura 1

         this.userService.getByIdent(localStorage.getItem("user")).subscribe(
             data => {
              this.reservation1.userRes=data
              this.user1=data
        
               } ,error => { console.log("Ha habido un erroooor 22222222222") },() => {   //Apertura 2

                  this.reservationService.getById(parseInt(localStorage.getItem("idReserv"))).subscribe(
                  data => {
                  this.reservation1=data
                  } ,error => { console.log("Ha habido un errooooor  333333333") },() => {   //Apertura 3
                        this.commande1= new Commande();
                        this.commande1.reservCommande=this.reservation1
                        this.commandeService.create(this.commande1).subscribe(
                        data => {
                        this.commande1=data;
                        },error => { console.log("Ha habido un errooooooooooooooor 444444444444") },() => {    //Apertura 4

                            this.facture1 = new Facture();
                            this.facture1.commandeFacture=this.commande1
                            this.facture1.prixTotal=0;
                            this.factureService.create(this.facture1).subscribe(
                              data => {
                                this.facture1=data;
                        
                              } ,error => {    console.log("Ha habido un errooooooooooooooor apertura 2")   },() => {  } )
        
            this.platService.getAll().subscribe(
              data => {
                this.listPlats = data;
              }
              )   
        
            }     // Cierre 4
            )
        
            }    // Cierre 3
            )    //estos dos cierran el subscribe inicial
        
        
            }     // Cierre 2
            )
        
            }     // Cierre 1
            )

  }

  }       //este es el cierre de ngonInit

}
