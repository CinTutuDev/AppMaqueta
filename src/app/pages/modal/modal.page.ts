import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoTwoPage } from '../modal-info-two/modal-info-two.page';
import { ModalInfoPage } from '../modal-info/modal-info.page';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }



  async mostrarModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Cinta',
        pais: 'España'
      }
    });
    modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);
    console.log(JSON.stringify(data));

  }
  async mostrarModalTwo(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoTwoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'nombre': 'Tutu',
        'apellido': 'Adams',
        'pais': 'España ',
        'icon': 'videocam-outline',
      }
    });
     await modal.present();
    /*  const {data} = await modal.onDidDismiss(); */
     const {data} = await modal.onWillDismiss();
     console.log('onWillDismiss');
     console.log(data);
    
  }
  }

