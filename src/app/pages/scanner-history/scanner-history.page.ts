import { Component, OnInit } from '@angular/core';
/* import { DataLocalService } from 'src/app/services/data-local.service'; */
import { DataLocalRegService } from '../../services/data-local-reg.service';

@Component({
  selector: 'app-scanner-history',
  templateUrl: './scanner-history.page.html',
  styleUrls: ['./scanner-history.page.scss'],
})
export class ScannerHistoryPage implements OnInit {

 /* tiene que ser publica para poder llamarlo desde el html */
  constructor(public dataLocalRegService: DataLocalRegService) { }

  ngOnInit() {
  }
  enviarCorreo(){
    console.log('Enviado correo ...');
  }
  abrirReg(registro){
    console.log('Reg' , registro);
    this.dataLocalRegService.abrirReg(registro)
  }
}
