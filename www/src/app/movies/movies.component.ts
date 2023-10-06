import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Movie, State } from 'src/movie';
import { MovieService } from 'src/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies!: Movie[];
  movie!: Movie;

  movieForm!: FormGroup;
  state: State = State.Waiting;

  constructor(private movieService: MovieService, private fb: FormBuilder) {}

  ngOnInit() {
    //J'initializa mon formulaire OnInit
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
    });
    //Je vais chercher mes films
    this.movieService.getMovies().subscribe({
      next: (movies) => {
        this.movies = movies;
      },
      error: (error) => {
        console.error(
          `Oops une erreur s'est produite dans la souscription onInit de movie.component.ts ==> Tu vas y arriver !`,
          error
        );
      },
    });
  }
  // Méthode pour charger les données du film et passer à l'état "Read"
  loadMovie(id: number): void {
    const index: string = id.toString();
    this.movieService.getMovieById(index).subscribe((data) => {
      this.movie = data;
      this.state = State.Read;
    });
  }
  //Passer à l'état "edit"
  editMovie(): void {
    this.state = State.Edit;
  }
  //Valider les modification & passer a l'état Waiting
  saveMovie(
    id: number,
    title: string,
    director: string,
    year: number,
    duration: number
  ): void {
    this.movieService.editMovie(id, title, director, year, duration);
    this.state = State.Waiting;
  }
  addMovie() {
    if (this.movieForm.valid) {
      const movieData: Movie = this.movieForm.value as Movie;

      this.movieService.addMovie(movieData).subscribe((newMovie) => {
        // Traitez la réponse ici si nécessaire.
        console.log('Nouveau film ajouté :', newMovie);

        // Réinitialisez le formulaire après l'ajout du film.
        this.movieForm.reset();
      });
    }
  }
  deleteMovie(id: string) {
    this.movieService.deleteMovie(id);
  }
}
