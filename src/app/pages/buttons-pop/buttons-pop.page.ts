import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-pop',
  templateUrl: './buttons-pop.page.html',
  styleUrls: ['./buttons-pop.page.scss'],
})
export class ButtonsPopPage implements OnInit {

  listaItem = Array(100);

  constructor() { }

  ngOnInit() {
  }

}
