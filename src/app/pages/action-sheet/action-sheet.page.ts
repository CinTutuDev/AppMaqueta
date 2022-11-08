import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  ngOnInit() {
  }

  onClick() {
    /* llamo al metodo para activar el evento */
    this.presentActionSheet();

  }

  constructor(private actionSheetCtrl: ActionSheetController) { }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones ',
      /* con ctrol+space sale opciones de propiedades */
      translucent:false,
      /* activo el evento para que no se cierre fuera al hacer click */
      backdropDismiss: false,
      /* subHeader: 'Ej', */
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          cssClass: 'red-delete',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Share',
          icon: 'share-social-sharp',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Play (open modal)',
          icon: 'headset-sharp',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Favorite',
          icon: 'diamond-sharp',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close-sharp',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    actionSheet.present();
  }
}

