import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info-two',
  templateUrl: './modal-info-two.page.html',
  styleUrls: ['./modal-info-two.page.scss'],
})
export class ModalInfoTwoPage implements OnInit {
[x: string]: any;


  /* PAra leer los componentes( componentProps:) del padre mediante input */
  @Input() nombre: string;
  @Input() pais: string;
  @Input() apellido: string;
 
data: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  salirSinArg(){
    this.modalController.dismiss();
  }
  salirConArg(){
    this.modalController.dismiss({
      nombre: 'BatTutu',
      home: 'LA cueva Dark'
    });
  }
}
