import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  /*  dos ejemplos de evenntos con alert */
  async presentOne() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentTwo() {

    const alert = await this.alertController.create({
      header: 'Alerta!',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alerta anulada';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alerta confirmada';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Descarto con el rol: ${role}`;

  }

  async presenCustom() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alerta',
      subHeader: 'Important message',
      message: 'Soy el mng!',
      buttons: [{
        text: 'Ok',
        handler: () => {
          console.log('¡soy handler');
        }
      }, {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'red-delete'

      }
      ],
    });

    await alert.present();
  }

  /* Evento con formulario */
  async presentImput() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',

      inputs: [
        {
          name: 'name1',
          type: 'text',
          id: 'name1',
          placeholder: 'Name',
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2',
          placeholder: 'Primer Apellido',
        },
        {
          /* es un parrafo */
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          /*     placeholder: 'placeholder 3' */
        },
        {
          /* URL */
          name: 'nameUrl',
          type: 'url',
          id: 'name3',
          value: 'https://ionicframework.com/docs/api/alert',
          placeholder: 'url de alerts',
          cssClass: 'url-color',
        },
        {
          name: 'name4',
          type: 'date',
          min: '1950-01-12',
          max: '2022-28-10',
          placeholder: 'Fecha de nacimiento',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
      /* buttons  */
      
      buttons: [{
        /* ....................Aquí es donde guardARÉ TODOS LOS DATOS ..............................*/
        text: 'Ok',
        cssClass: 'green-ok',
        handler: (data:any) => {
          console.log(data);

        }
      }, {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'red-delete'
      }
      ],
    });

    await alert.present();
  }

}//cierre 
