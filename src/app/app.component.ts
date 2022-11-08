import { Component, OnInit } from '@angular/core';
import {  defineCustomElements} from '@ionic/pwa-elements/loader'
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from 'src/app/services/dataJSON.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit  {
  componentes: Observable<Componente[]>;

  async ngOnInit() {
    this.componentes = this.dataService.getPageMenu();
    await this.storage.create();
  }

  constructor(  private dataService: DataService, private storage: Storage) {
  this.dataService.getPageMenu();
    defineCustomElements(window);
  }
}
