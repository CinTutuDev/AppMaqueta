import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Registro } from '../modelos/registroScan.model';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
@Injectable({
  providedIn: 'root',
})
export class DataLocalService {
  private _storage: Storage | null = null;
  guardados: Registro[] = [];

  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private iab: InAppBrowser
  ) {
    this.cargarStorage();
  }

  async cargarStorage() {
    this.guardados = (await this.storage.get('registros')) || [];
    const name = await this.storage.get('name');
    this.init();
    console.log(this._storage, name);
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }
  public set(key: string, value: any) {
    this._storage?.set(key, value);
    console.log(this._storage);
  }

  async guardarRegistro(format: string, text: string) {
    await this.cargarStorage();
    const nuevoRegistro = new Registro(format, text);
    this.guardados.unshift(nuevoRegistro);
    /* registros */
    console.log(this.guardados);

    /* this.navCtrl.navigateForward('/scanner-history'); */
    this.abrirReg(nuevoRegistro);
    /* registros */
    this.storage.set('Registros', this.guardados);
  }

  abrirReg(registro: Registro) {
    this.navCtrl.navigateForward('/scanner-history');
    switch (registro.type) {
      case 'http':
        this.iab.create(registro.text, '_system');
        break;
      case 'geo':
        this.navCtrl.navigateForward(`/mapa/${registro.text}`);
        break;

      default:
        break;
    }
  }
}
