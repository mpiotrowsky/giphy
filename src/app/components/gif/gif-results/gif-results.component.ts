import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { GifSearchService } from '../../../services/gif-search.service';
import { DataService } from '../../../services/data.service';


@Component({
  selector: 'app-gif-results',
  templateUrl: './gif-results.component.html',
  styleUrls: ['./gif-results.component.scss']
})
export class GifResultsComponent implements OnInit {
  searchResults;

  constructor(private snackBar: MatSnackBar,
    private searchService: GifSearchService,
    private dataService: DataService) { }

  ngOnInit() {
    this.searchService.currentResults.subscribe(results => this.searchResults = results);
  }

  addToFavorites(item) {
    if (this.dataService.favorites.includes(item)) {
      this.snackBar.open('Item already added!', '', {
        duration: 3000
      });
    } else {
      this.dataService.favorites.push(item);
      this.snackBar.open('Item added to favorites!', '', {
        duration: 3000
      });
      localStorage.setItem('favorite-gifs', JSON.stringify(this.dataService.favorites));
    }
  }

}
