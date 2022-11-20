import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var mapboxgl: any;

@Component({
  selector: 'app-mapa-geo',
  templateUrl: './mapa-geo.page.html',
  styleUrls: ['./mapa-geo.page.scss'],
})
export class MapaGeoPage implements OnInit, AfterViewInit {
  latitud: number;
  longitud: number;
  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    let geo: any = this.router.snapshot.paramMap.get('geo');

    /* geo:40.73151796986687,-74.06087294062502%20
       01234 -->quiero la pòsicion 4 */
    geo = geo.substring(4);
    geo = geo.split(',');

    this.latitud = Number(geo[0]);
    this.longitud = Number(geo[1]);

    console.log('La latitud: ', this.latitud, 'y La long: ', this.longitud);
  }

  ngAfterViewInit(): void {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiY2ludGF0YyIsImEiOiJjbGE1cGFsbHQwMWR6M25yeGc2OXdkcmRjIn0.RtIO5QfsBnjn6o4ZV4qufg';
      const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12',
center: [0, 0],
zoom: 2
});
 
const marker = new mapboxgl.Marker({
draggable: true
})
.setLngLat([0, 0])
.addTo(map);
 
function onDragEnd() {
const lngLat = marker.getLngLat();
coordinates.style.display = 'block';
coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
}
 
marker.on('dragend', onDragEnd);
  }
}
