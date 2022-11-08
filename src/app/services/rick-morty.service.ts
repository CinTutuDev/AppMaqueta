import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  get: any;
  constructor(private http: HttpClient) {}

  dameRyM() {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }
}
