import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/dataJSON.service';
import {  IonList } from "@ionic/angular";
@Component({
  selector: 'lista-json',
  templateUrl: './lista-json.page.html',
  styleUrls: ['./lista-json.page.scss'],
})
export class ListaJSONPage implements OnInit {

  /* lo llamo e importo para que se cierren las list desplegables */
  @ViewChild(IonList) ionList: IonList;
  user: Observable<any>;

  constructor(private dataJSONservice: DataService) { }

  ngOnInit() {
    this.user = this.dataJSONservice.getUserJson();

  }

  favorito(i: any) {
    console.log('favorito',i);
    this.ionList.closeSlidingItems();
  }
  cuota(i: any) {
    console.log('cuota', i);
    this.ionList.closeSlidingItems();
  }
  borrar(i: any) {
    console.log('Se ha borrado',i.name);
    this.ionList.closeSlidingItems();
  
  }


}
