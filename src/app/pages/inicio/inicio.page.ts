import { Component, OnInit } from '@angular/core';
import {/*  BarcodeScanner, BarcodeScannerOptions */ } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/dataJSON.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit   {

  componentes: Observable<Componente[]>;

  constructor(private barcodeScanner: BarcodeScanner,
              private menuCtrl: MenuController,
              private dataService: DataService        ) { }


  ngOnInit() {
    this.componentes = this.dataService.getPageMenu()
  }
  
    mostrarMenu() {
      this.menuCtrl.open("first");
    }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
    }).catch(err => {
      console.log('Error', err);
    });

  }

}
