import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PopOverInfComponent } from 'src/app/components/pop-over-inf/pop-over-inf.component';


@Component({
  selector: 'app-pop-over',
  templateUrl: './pop-over.page.html',
  styleUrls: ['./pop-over.page.scss'],
})
export class PopOverPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopOverInfComponent ,
      event: ev,
      translucent: true
    });

    return await popover.present();

   /*  const { role } = await popover.onDidDismiss();
    this.roleMsg = `Popover dismissed with role: ${role}`; */
  }
}

