import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage {
  swiperOpts = {
    sllowSliderPrev: false,
    allowSliderNext: false,
  };

  constructor(
    private barcodeScanner: BarcodeScanner,
    private datalocal: DataLocalService
  ) {}

  ionViewWillEnter() {
    console.log('muestra');
  }
  ionViewDidEnter() {
    console.log('termina');
    this.scan();
  }
  ionViewWillLeave() {
    console.log('a punto');
  }
  ionViewDidLeave() {
    console.log('termina');
  }

  scan() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        console.log('Barcode data', barcodeData);

        if (!barcodeData.cancelled) {
          this.datalocal.guardarRegistro(barcodeData.format, barcodeData.text);
        }
      })
      .catch((err) => {
        console.log('Error', err);
        /* simulador de http para ver si funciona en pc */
        /* geo:40.73151796986687,-74.06087294062502 */
        this.datalocal.guardarRegistro(
          /* si sale un error lanzo mi dir jejej */
          'QRCode',
          'https://www.youtube.com/watch?v=jRGrNDV2mKc'
        );

        /*     this.dataLocalRegService.guardoReg(
          'QRCode',
          'geo:40.73151796986687,-74.06087294062502 '
        ); */
      });
  }
}
