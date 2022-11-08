import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
/* import { DataLocalService } from 'src/app/services/data-local.service'; */
import { DataLocalRegService } from '../../services/data-local-reg.service';
@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage {
  /* scannedData: any; */
  swiperOpts = {
    sllowSliderPrev: false,
    allowSliderNext: false,
  };

  constructor(
    private barcodeScanner: BarcodeScanner,
    public dataLocalRegService: DataLocalRegService
  ) {}
  abrirReg(registro) {
    console.log('Historial de registro', registro);
  }
  ionViewWillEnter() {
    /* console.log('vwenter'); */
    this.scan();
  }
  ionViewWillLeave() {
    /* console.log('ionViewWillLeave'); */
  }
  ionViewDidLeave() {
    /*  console.log('ionViewDidLeave'); */
  }

  ionViewDidEnter() {
    /*     console.log('ionViewDidEnter'); */
    this.scan();
  }

  scan() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        /*  this.scannedData = barcodeData.text; */

        console.log('Barcode data', barcodeData);

        if (!barcodeData.cancelled) {
          this.dataLocalRegService.guardoReg(
            barcodeData.format,
            barcodeData.text
          );
        }
      })
      .catch((err) => {
        console.log('Error', err);
        /* simulador de http para ver si funciona en pc */
        /* geo:40.73151796986687,-74.06087294062502 */
        /* this.dataLocalRegService.guardoReg('QRCode', 'https://gist.github.com/Klerith/6a12c5721108b9d064d1c231e2a3b58d') ; */
        this.dataLocalRegService.guardoReg(
          'QRCode',
          'geo:40.73151796986687,-74.06087294062502 '
        );
      });
  }
}
