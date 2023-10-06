import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url: string = 'http://localhost:3000/api';
  movies!: Movie[];
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.url}/all`);
  }
  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/movies/${id}`);
  }
  deleteMovie(id: string): Observable<void> {
    const deleteUrl: string = `this.url/movies/delete/${id}`;
    return this.http.delete<void>(deleteUrl);
  }
  addMovie(movieData: Movie): Observable<Movie> {
    const addUrl = `${this.url}/add`; //
    return this.http.post<Movie>(addUrl, movieData);
  }

  editMovie(
    id: number,
    title: string,
    director: string,
    year: number,
    duration: number
  ): Observable<Movie> {
    const editUrl = `${this.url}/edit/${id}`;
    const movieData = { title, director, year, duration };
    return this.http.put<Movie>(editUrl, movieData);
  }
}
