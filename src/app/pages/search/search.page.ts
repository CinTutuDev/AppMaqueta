import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataJSON.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albunes: any[]= [];
  textBuscar: string = ';'

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.getAlbunesJson().subscribe(albunes =>{
      this.albunes = albunes;
    })
  }


  handleChange(event) {
   this.textBuscar = event.target.value.toLowerCase();
  /*   this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1); */
  }
 
}
