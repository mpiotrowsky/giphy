import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifSearchService {
  giphyKey = 'EwQCHDTYU2onchg4pwYQmRFRcugz5ySa';
  private searchResults = new BehaviorSubject<any>([]);
  currentResults = this.searchResults.asObservable();

  constructor(private http: HttpClient) { }

  search(phrase) {
    return this.http.get(`http://api.giphy.com/v1/gifs/search?q=${phrase}&api_key=${this.giphyKey}`);
  }

  updateResults(results) {
    this.searchResults.next(results);
  }

}
