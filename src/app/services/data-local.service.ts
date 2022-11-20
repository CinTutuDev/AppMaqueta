import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Registro } from '../modelos/registroScan.model';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
@Injectable({
  providedIn: 'root',
})
export class DataLocalService {
  private _storage: Storage | null = null;
  guardados: Registro[] = [];

  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private iab: InAppBrowser,
    private file: File
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
        this.navCtrl.navigateForward(`/scanner-history/${registro.text}`);
        break;

      default:
        break;
    }
  }

  enviarCorreo() {
    const arrayTemporal = [];
    const titulos = 'Tipo, Formato, Creado en, Texto\n';

    arrayTemporal.push(titulos);

    this.guardados.forEach((reg) => {
      const fila = `${reg.type}, ${reg.format}, ${
        reg.created
      }, ${reg.text.replace(',', ' ')}\n`;
      arrayTemporal.push(fila);
    });
    console.log(arrayTemporal.join(''));
    this.crearArchivo(arrayTemporal.join(''));
  }

  crearArchivo(text: string) {
    /* 1º verifico si existe al archivo... 2ºsi existe return escribir en archivo*/
    this.file
      .checkFile(this.file.dataDirectory, 'registro.csv')
      .then((existe) => {
        console.log('Directorio existe?', existe);
        return this.escribirEnArchivo(text);
      })
      /* 3ºSi no existe archivo lo creo y una ves creado lo mando escribir en archivo */
      .catch((err) => {
        return this.file
          .createFile(this.file.dataDirectory, 'registro.csv', false)
          .then((creado) => this.escribirEnArchivo(text))
          .catch((rror2) =>
            console.log('No se ha podido crear archivo', rror2)
          );
      });
  }
  async escribirEnArchivo(text: string) {
    await this.file.writeExistingFile(
      this.file.dataDirectory,
      'registro.csv',
      text
    );
    console.log('Archivo creado');
    console.log(this.file.dataDirectory + 'registro.csv');
  }
}
