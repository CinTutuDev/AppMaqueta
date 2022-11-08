import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  dataColors = [
    {
      name: 'primary',
      selected: 'false',
    },
    {
      name: 'secondary',
      selected: 'true',
    },
    {
      name: 'tertiary',
      selected: 'false',
    },
    {
      name: 'success',
      selected: 'true',
    },
  ];
  constructor() {}

  ngOnInit() {}
  onClick(i: any) {
    console.log(i);
  }

  verDatos(){
    console.log(this.dataColors);
   
  }
}
