import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-movies-detalles',
  templateUrl: './movies-detalles.page.html',
  styleUrls: ['./movies-detalles.page.scss'],
})
export class MoviesDetallesPage implements OnInit {

  movie = null;
  imageBaseUrl = environment.images;
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.moviesService.damePelisDetalles(id).subscribe(res => {
      console.log(res);
      this.movie = res;
    })
  }

  openHomePage(){
    window.open(this.movie.homepage)
  }

}
