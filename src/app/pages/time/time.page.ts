import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})
export class TimePage implements OnInit {

  fechaN: Date = new Date;
  agnosPersonalizados = [2020, 2016, 2008, 2004, 2000, 1996];
  nombresDiasCortados = ['lun', 'mar', 'mie', 'jue', 'vie', 'sab', 'dom'];
  /* opcionesPersonalizas: any; */
  opcionesPersonalizas ={
    buttons:[
      {
        text: 'hola',
        handler: (event) => console.log(event)
      },
      {
        text: 'caracola',
        handler: () => console.log('me has dado')
      },
    ]
  }
  constructor() {

   }

  ngOnInit() {
  }

  cambioFech(event){
    console.log(event);
    console.table('Muestro estracto de fecha');
    /* estoy mostrando el valor de la fecha */
    console.log(new Date(event.detail.value));

  }
}
