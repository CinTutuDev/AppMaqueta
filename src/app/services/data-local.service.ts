import { Injectable } from '@angular/core';

import { Registro } from '../modelos/registroScan.model';

@Injectable({
  providedIn: 'root',
})
export class DataLocalService {
  guardados: Registro[] = [];

  constructor() {}

  guardarRegistro(format: string, text: string) {
    const nuevoRegistro = new Registro(format, text);
    this.guardados.unshift(nuevoRegistro);

    console.log(this.guardados);
  }
}
