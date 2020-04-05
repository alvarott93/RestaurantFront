import { User } from './user';
import { Tables } from './tables';

export class Reservation {
    idReservation: number;
    horaire: Date;
    horaire_String: String;
    numPersonnes: number;
    userRes: User;
    serveur: User;
    tableReserv: Tables;
}




