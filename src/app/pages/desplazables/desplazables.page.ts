import { DataService } from 'src/app/services/dataJSON.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-desplazables',
  templateUrl: './desplazables.page.html',
  styleUrls: ['./desplazables.page.scss'],
})
export class DesplazablesPage implements OnInit {

  superHeroes: Observable<any>;
  publicado: string = '';


  constructor(private datajsonservice: DataService) { }

  ngOnInit() {
    this.superHeroes = this.datajsonservice.getHeroesJson();

  }
  segmentChanged(event){
    console.log(event.detail.value);
    if ( event.detail.value === 'CD Comics' ){
     return this.publicado = '';
    }
    this.publicado =  event.detail.value;
   
  }
}
