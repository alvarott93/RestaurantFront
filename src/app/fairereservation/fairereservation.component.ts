import { Component, OnInit } from '@angular/core';
import { TablesService } from '../services/tables.service';
import { Tables } from '../models/tables';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../models/reservation';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fairereservation',
  templateUrl: './fairereservation.component.html',
  styleUrls: ['./fairereservation.component.css']
})
export class FairereservationComponent implements OnInit {
  ind: number
  listHoraires : Date[] = []
  listHorairesdispos : Date[] = []
  listHorairesBoolean: boolean[] = []
  listReservations: Reservation[]= []
  listTableAsignee: number[]= []
  listTableAsigneeDispo: number[]= []
  numeroPersonas: number;
  numeroPersonas2: number;
  tables1: Tables
  tables2: Tables
  tables3: Tables
  reservation1: Reservation
  user1: User
  selecthor;
  numhorairesdispos: Date[] = []
  horairechoisi: Date;



  date99: Date= new Date();
   date1: Date; 
  date2: Date; 
  date6: Date;   //lo necesita calendar
  es: any;
 
  
  //date1=(2019,07,04);

  constructor(private tableService: TablesService, private reservationService: ReservationService, private userService: UserService) { }



  traitementheure() {

    this.date2.getMilliseconds()


    this.date2.setHours(10, 30)
    for (var i=0; i<5; i++) {
      this.listHoraires[i]=this.date2
      this.listHoraires[i]=new Date(this.date2.getTime()+1800000*(i+1))
      this.listHorairesBoolean[i]=false     //false by default!!!
      console.log(this.listHoraires[i])
    }


    this.date2.setHours(17, 30)
    for (var i=0; i<5; i++) {
      this.listHoraires[i+5]=this.date2
      this.listHoraires[i+5]=new Date(this.date2.getTime()+1800000*(i+1))
      this.listHorairesBoolean[i+5]=false
      console.log(this.listHoraires[i+5])
    }



    this.tableService.getByCaptable(parseInt(this.numeroPersonas.toString())).subscribe(
      data => {
        this.tables1=data;    //tener cuidado con que de tiempo a meter los datos en caso de fallo, es una promesa!!
        //console.log("he recuperado la table con capacidad"+this.tables1.capTables)
      } ,error => {      console.log("Ha habido un errooooooooooooooor 111111111111")  },() => {   // Apertura 1

        this.tableService.getByCaptable(parseInt(this.numeroPersonas.toString())+1).subscribe(
          data => {
            this.tables2=data;    //tener cuidado con que de tiempo a meter los datos en caso de fallo, es una promesa!!
            console.log("testo")
            //console.log("he recuperado la table con capacidad"+this.tables2.capTables)
          } ,error => {      console.log("Ha habido un errooooooooooooooor 111111111111")  },() => {   // Apertura 1b
            this.numeroPersonas2=this.numeroPersonas+1
            this.tableService.getByCaptable(parseInt(this.numeroPersonas.toString())+2).subscribe(    //Math.floor(this.numeroPersonas+1)  
              data => {
                this.tables3=data;    //tener cuidado con que de tiempo a meter los datos en caso de fallo, es una promesa!!
                console.log("testo2")
                //console.log("he recuperado la table con capacidad"+this.tables3.capTables)
              } ,error => {      console.log("Ha habido un errooooooooooooooor 111111111111")  },() => {   // Apertura 1c 

        this.reservationService.getAll().subscribe(
          data => {
            this.listReservations=data;   
          } ,error => {      console.log("Ha habido un errooooooooooooooor 222222222222")  },() => {   // Apertura 2

              
    
      for (var i=0; i<this.listHoraires.length; i++) {
        console.log("iteration numero: "+i)
        var counter=0;
        var counter2=0;
        var counter3=0;
        for (var j=0; j<this.listReservations.length; j++) {

          if (this.listReservations[j].horaire!=null) {  // if que deberia solucionar el probema de formato
            this.listReservations[j].horaire=new Date(this.listReservations[j].horaire) }
            else {}

          if (this.listReservations[j].tableReserv!=null) {
            //console.log("test 000000000000000000000")
            //var y0 =this.listReservations[j].horaire
            //console.log("la date es "+y0)
            //console.log("test 11111111111111111111111111111")
            //var y1 =this.listReservations[j].horaire.getTime()
            //console.log("test ////////////////////////")
            //console.log("el math da "+y1.toString())
            //console.log("test 2222222222222222222222222222")
            //var y2 =Math.abs(this.listReservations[j].horaire.getTime()-this.listHoraires[i].getTime())
            //console.log("test ////////////////////////")
            //console.log("el math da "+y2.toString())
            //console.log("test 33333333333333")
             if (this.listReservations[j].tableReserv.capTables==this.numeroPersonas && Math.abs(this.listReservations[j].horaire.getTime()-this.listHoraires[i].getTime())<2400000) {
               counter=counter+1
             } else {}  //if en el que compruebo si hay solape horario con todas las reservas
             //console.log("dif de tiempos :"+Math.abs(this.listReservations[j].horaire.getTime()-this.listHoraires[i].getTime()))

             if (this.listReservations[j].tableReserv.capTables==(parseInt(this.numeroPersonas.toString())+1) && Math.abs(this.listReservations[j].horaire.getTime()-this.listHoraires[i].getTime())<2400000) {
              counter2=counter2+1
            } else {} 

            if (this.listReservations[j].tableReserv.capTables==(parseInt(this.numeroPersonas.toString())+2) && Math.abs(this.listReservations[j].horaire.getTime()-this.listHoraires[i].getTime())<2400000) {
              counter3=counter3+1
            } else {} 

        } else{} // cierre if que comprueba si la reserva tiene una mesa asignada
        

        }  // cierre loop j que itera en cada reserva
          //console.log("counter en cada reserva, de veces que se solapan: counter= "+counter+"; counter2="+counter2+"; counter3="+counter3)
          //console.log(" numero de mesas a comparar con counter para la misma capacidad: "+this.tables1.numTables+" , "+this.tables2.numTables+" , "+this.tables3.numTables+" respectivamente")
           if (this.tables3!=null) { 
           if (counter3<this.tables3.numTables) {  
             this.listHorairesBoolean[i]=true 
             this.listTableAsignee[i]=3} }
             if (this.tables2!=null) { 
               if (counter2<this.tables2.numTables) {  
                 this.listHorairesBoolean[i]=true 
                 this.listTableAsignee[i]=2 } }
                 if (this.tables1!=null) { 
                   if (counter<this.tables1.numTables) {  //tener cuidado aqui porque cuando busque con +2 tengo que haber buscado la table buena
                     this.listHorairesBoolean[i]=true 
                     this.listTableAsignee[i]=1} }









      }  //cierre loop i que itera en cada horario

      console.log("fin del tratamiento de listhoraires")
      console.log("listhorairesboolean es "+this.listHorairesBoolean)
      var pos=0;
      for (var i=0; i<this.listHorairesBoolean.length;i++) {
        if (this.listHorairesBoolean[i]==true) {
           console.log("una transformacion de la listaaaaaaaaaaaaaaaa")
            this.listHorairesdispos[pos]=this.listHoraires[i];
            this.listTableAsigneeDispo[pos]=this.listTableAsignee[i]
            pos=pos+1;
        }
      }

      console.log("numero de horaires disponibles: "+pos.toString)
      this.selecthor=true
      console.log("activo el selector de horarios para que se puedan ver los horarios dispos")



      if (this.tables1==null) {

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Pas des tables disponibles pour cette numero de personnes, desolé!',
          footer: '<a href>Pourriez-vous choisir un numero different de personnes?</a>'
        })
        this.selecthor=false;



      }



          } //Cierre 2 promesa
          )

         } //Cierre 1c promesa
         )

        } //Cierre 1b promesa
        )

      } //Cierre 1 promesa
      )



      
  }  // cierro funcion traitementheure




  continueralacommande() {


    var posic_lista = this.listHorairesdispos.indexOf(this.horairechoisi);
    console.log("posicion de la lista de horarios: "+posic_lista)

    
    console.log("ha seleccionado el horario: "+this.horairechoisi)

      this.reservation1.horaire=this.horairechoisi;
      this.reservation1.horaire_String=this.horairechoisi.toString().substr(0, 24)
      console.log("la reserve avant d'etre actualisee a un horaire de:  : "+this.reservation1.horaire)
      console.log("la reserve avant d'etre actualisee a un horaire_String de:  : "+this.reservation1.horaire_String)


     
      //siempre le estoy metiendo la table1, por eso las otras siempre estan dispos


      console.log("la table que deberia ser asignada es: "+this.listTableAsigneeDispo[posic_lista])
      if (this.listTableAsigneeDispo[posic_lista]==1){
        this.reservation1.tableReserv=this.tables1;
      }
       else if (this.listTableAsigneeDispo[posic_lista]==2){
        this.reservation1.tableReserv=this.tables2;
      }
      else if (this.listTableAsigneeDispo[posic_lista]==3){
        this.reservation1.tableReserv=this.tables3;
      }
      else { console.log("ERRRRRRROOOOOR: NINGUNA MESA ASIGNADA A LA RESERVA")}




      this.reservation1.numPersonnes=this.numeroPersonas;

      this.reservationService.create(this.reservation1).subscribe(
       data => {
        this.reservation1=data;   
       } ,error => {      console.log("Ha habido un errooooooooooooooor")  },() => {  // Apertura 1

     //console.log("he actualizado la reserva con id : "+this.reservation1.idReservation)
     //console.log("la reserva ahora tiene un numero de personas de:  : "+this.reservation1.numPersonnes)
     //console.log("la reserva ahora tiene una mesa asignada de : "+this.reservation1.tableReserv.capTables+"personas")
     console.log("l'horaire est:  : "+this.horairechoisi)
     console.log("la reserve apres d'etre actualisee et retournee a un horaire: "+this.reservation1.horaire)
     console.log("je change l'heure manuellement a 11:00")
     //this.reservation1.horaire.setHours(12, 30)

     //var mils=this.reservation1.horaire.getTime()
     //console.log("je le transforme en milisecondes avec get time...")
     //console.log("il donne "+mils.toString()+"miliseconds")

     console.log("///////////////////////////")
     var milsString3=this.horairechoisi.toString()   // este es el bueno!!!!!
     //var milsString4=this.horairechoisi.toDateString()
     console.log("format string de l'horaire choisi donne "+milsString3)   
     //console.log("il donne "+milsString4)

     console.log("apres de retourner du String a Date:")
     var milsString5=new Date(milsString3);
     console.log("AAAAAAAA")
     console.log("Format date: "+milsString5)

     var milsString6 = new Date(milsString5.getTime()+1800400)
     console.log("ajout demi heure, format date: "+milsString6)
     var milString7= milsString6.toString()
     console.log("ajout demi heure, format String: "+milsString6)

     //hacer esta pueba con un horario recuperado
     var milsString8= new Date(this.reservation1.horaire)
     console.log("prueba desesperada: "+milsString8)   // funciona!!!!!!!!!!!!

     var milsString9= new Date(milsString8.getTime()+1800400)
     console.log("prueba desesperada 2: "+milsString9)  
     //window.location.href = 'http://localhost:4200/sidebar'
     window.location.href = 'http://localhost:4200/fairecommandeclient'
     //var milsString=this.reservation1.horaire.toDateString()
     //var milsString2=this.reservation1.horaire.toString()
     //console.log("je le transforme en milisecondes avec get time...")
     //console.log("il donne "+milsString)
     //console.log("il donne "+milsString2)


   }   // Cierre 1
)

      

  }

  ngOnInit(): void {

    this.selecthor=false; //pas afficher les horaires par defaut

    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }

    console.log("Entro en faireReservation")

     this.reservation1=new Reservation();
     this.user1= new User();
    this.userService.getByIdent(localStorage.getItem("user")).subscribe(
      data => {
        this.reservation1.userRes=data
        this.user1=data
      }
      ,error => {  console.log("Ha habido un errooooooooooooooor")  },() => {   //Apertura 1
        // cas ou ça finit

    console.log(" despues de buscarlo el user que recupero tiene com identifiant: "+this.user1.identifUser)   
    
     this.reservationService.create(this.reservation1).subscribe(
       data => {
         this.reservation1=data
       }
       ,error => {     console.log("Ha habido un errooooooooooooooor")  },() => { //Apertura 2

        localStorage.setItem("idReserv", this.reservation1.idReservation.toString());
        console.log("el id de la reservacion creada es "+this.reservation1.idReservation+" y lo guardo en memoria interna")
 

       }  // Cierre 2
     )

      }   // Cierre1
    )


  }

}

