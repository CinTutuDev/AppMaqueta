import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUserJson() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  /* es el metodo que devuelve las pages del inicio del json // el  <Componente[]>es un arreglo de la interface*/
  getPageMenu() {
    return this.http.get<Componente[]>('/assets/data/pages.json');
  }

  getAlbunesJson() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getHeroesJson() {
    return this.http.get<any[]>('/assets/data/superheroes.json');
  }
  

}
