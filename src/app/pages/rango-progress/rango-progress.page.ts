import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rango-progress',
  templateUrl: './rango-progress.page.html',
  styleUrls: ['./rango-progress.page.scss'],
})
export class RangoProgressPage implements OnInit {
  porcentaje: number = 0.05;

  constructor() {}

  ngOnInit() {}
  rangeChange(event) {
    /*     console.log(event.detail.value); */
    this.porcentaje = event.detail.value / 100;
  }
}
