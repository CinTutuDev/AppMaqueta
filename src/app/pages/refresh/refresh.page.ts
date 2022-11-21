import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.page.html',
  styleUrls: ['./refresh.page.scss'],
})
export class RefreshPage implements OnInit {

  items: any [] = [];

  constructor() { }

  ngOnInit() {
  }
  handleRefresh(event) {
    setTimeout(() => {
      /* cuando la inf está cargada llamo al array ...*/
      // Any calls to load data go here
      this.items = Array(20);
      event.target.complete();
    }, 1500);
  };

}
