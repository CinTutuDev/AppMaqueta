import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { MoviesService } from '../../services/movies.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  moviesArray = [];
  currentPage = 1;
  imageBaseUrl = environment.images;
  constructor(
    private moviesService: MoviesService,
    private loadingctrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadMovies();
  }
  async loadMovies(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingctrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.moviesService.dameTopPelis(this.currentPage).subscribe((res) => {
      loading.dismiss();
      //this.moviesArray = [...this.moviesArray, ...res.results];
      this.moviesArray.push(...res.results);
      console.log(res);

      event?.target.complete();
       if (event) {
        event.target.disabled = res.total_pages === this.currentPage;
       }
    });
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);
  }
}
