import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { PhotoService, UserPhoto } from '../../services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage {
  constructor(
    public photoService: PhotoService,
    public actionSheetController: ActionSheetController
  ) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  public async showActionSheet(photo: UserPhoto, position: number) {
    /* Metodo para opiones de galeria(al thacer click en la foto muestra: ) */
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.photoService.deletePicture(photo, position);
          },
        },

        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            // Nothing to do, action sheet is automatically closed
          },
        },
        {
          text: 'Share',
          icon: 'share-social-sharp',
          data: {
            action: 'share',
          },
        },

      ],
    });
    await actionSheet.present();
  }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }
}
