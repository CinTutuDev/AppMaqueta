import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PopOverInfComponent } from 'src/app/components/pop-over-inf/pop-over-inf.component';


@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.page.html',
  styleUrls: ['./pop-over.page.scss'],
})
export class PopOverPage implements OnInit {
  roleMsg = '';
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopOverInfComponent ,
      event: ev,
      translucent: true,
      /* se pone para tener que hacer clicxk en una opción */
      backdropDismiss: false
    });

    await popover.present();

    const { data } = await popover.onWillDismiss();
    console.log(data);
    /* this.roleMsg = `Popover dismissed with role: ${role}`; */
  }
}

