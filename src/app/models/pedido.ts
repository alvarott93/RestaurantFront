import { Commande } from './commande';
import { Plat } from './plat';
import { Facture } from './facture';

export class Pedido {
    idPedido: number;
    commandePedido: Commande;
    platPedido: Plat;
    quantityPlatpedido: number;
    facturePedido: Facture;

}




