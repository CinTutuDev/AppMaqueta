import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.page.html',
  styleUrls: ['./rick-morty.page.scss'],
})
export class RickMortyPage implements OnInit {
  
    myr: [];
    constructor(private http: HttpClient) {}

  ngOnInit() {
   this.http.get<any>('https://rickandmortyapi.com/api/character').subscribe(res => {
    console.log(res);
    this.myr = res.results;
   })
 
  }
}
