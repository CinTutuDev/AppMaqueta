import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-lista-reorder',
  templateUrl: './lista-reorder.page.html',
  styleUrls: ['./lista-reorder.page.scss'],
})
export class ListaReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Mujer Maravilla', 'Pokemon']

  reordenDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }
  reordenarLista(e: CustomEvent<ItemReorderEventDetail>) {
    /* para que la info sea persistente:  */
    /* corto la posion que muevo y me quedo con 1 arreglo y me quedo con 1º pos*/
    const ordenoItem = this.personajes.splice(e.detail.from, 1)[0];
    /* para insertarlo en la posicion que quiero */
    this.personajes.splice(e.detail.to, 0, ordenoItem);
   
    e.detail.complete();
    console.log(this.personajes);
  }

  toggleReorder(){

  }
}
