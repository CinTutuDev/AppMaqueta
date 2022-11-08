import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-scroll-infinito',
  templateUrl: './scroll-infinito.page.html',
  styleUrls: ['./scroll-infinito.page.scss'],
})
export class ScrollInfinitoPage implements OnInit {

  datos: any[] = Array(20);
  /* se crea para hacer referencia al ion-infinite-scroll -> import ViewChild */
  @ViewChild(IonInfiniteScroll) scrollInfinito: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(e) {
    setTimeout(() => {
      if (this.datos.length > 50) {
        this.scrollInfinito.complete();
        this.scrollInfinito.disabled = true;
        return;
      }
      const dataA: any[] = Array(20);
      /* guardo array nuevo en el antiguo cada vez que baje el scroll con esto + 20*/
      this.datos.push(...dataA);
      /*  e.target.complete(); */
      this.scrollInfinito.complete();
    }, 1500);
  }
}
