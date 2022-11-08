import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit, AfterViewInit {
  latitud: number;
  longitud: number;
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    let geo: any = this.router.snapshot.paramMap.get('geo');
    console.log(geo);
    /* geo:40.73151796986687,-74.06087294062502%20
       01234 -->quiero la pòsicion 4 */
    geo = geo.substring(4);
    geo = geo.split(',');

    this.latitud = Number(geo[0]);
    this.longitud = Number(geo[1]);

    console.log('La latitud: ', this.latitud, 'y La long: ', this.longitud);
  }

  ngAfterViewInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2ludGF0YyIsImEiOiJjbGE1cGFsbHQwMWR6M25yeGc2OXdkcmRjIn0.RtIO5QfsBnjn6o4ZV4qufg';
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
    projection: 'globe' // display the map as a 3D globe
 
    });
    map.on('style.load', () => {
      map.setFog({}); // Set the default atmosphere style
      });
  }



}
