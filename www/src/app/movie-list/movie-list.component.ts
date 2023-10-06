import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/movie';
import { MovieService } from 'src/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  movies!: Movie[];

  constructor(private movieService: MovieService) {}
  ngOnInit() {
    this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
    });
  }
}
