import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl = 'http://www.omdbapi.com/'; // variable that carries link where we making a request from
  apiKey = '650a35f4';  // variable carries my own api key

  constructor(private http: HttpClient) { }

  searchMovies(title: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&s=${title}`);
  }
}