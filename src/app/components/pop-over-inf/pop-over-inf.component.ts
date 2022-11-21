import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-over-inf',
  templateUrl: './pop-over-inf.component.html',
  styleUrls: ['./pop-over-inf.component.scss'],
})
export class PopOverInfComponent implements OnInit {

  items = Array(7);

  myr: [];
  constructor(private http: HttpClient, private popCtrl: PopoverController) {}

ngOnInit() {
 this.http.get<any>('https://rickandmortyapi.com/api/character').subscribe(res => {
 /*  console.log(res); */
  this.myr = res.results;
 })

}
onClick(val : number){
console.log(val);
  this.popCtrl.dismiss({
    item: val
  })

}

}
