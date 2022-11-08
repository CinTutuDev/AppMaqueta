/* import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicStorageModule, Storage } from '@ionic/storage-angular';

import { Registro } from '../modelos/registroScan.model';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { BehaviorSubject } from 'rxjs';

const STORAGE_KEY = 'mylista';

@Injectable({
  providedIn: 'root',
})
export class DataLocalService {
  private storageReady = new BehaviorSubject(false);

  guardados: Registro[] = [];

  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private inAppBrow: InAppBrowser
  ) {
    /*     this.init(); */
   /*  this.storageReady.next(true);
    this.cargaStorage(); */
/*   } */
  /* async cargaStorage() {
   await this.storage.get('registros') || [];
    console.log('done');
  } */
/* 
  async guardarReg(format: string, text: string) {
    await this.cargaStorage();

    const nuevoReg = new Registro(format, text);
    this.guardados.unshift(nuevoReg);
    console.log(this.guardados);
    this.storage.set('registros', this.guardados);

    this.abrirReg(nuevoReg);
  } */

  /* abrirReg(registro: Registro) {
    this.navCtrl.navigateForward('/scanner-history');
    switch (registro.type) {
      case 'http':
        const browser = this.inAppBrow.create(registro.text, '_system');
        break;

      default:
        break;
    }
  } */
/* } */

 