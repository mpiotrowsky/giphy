import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-gif-favorites',
  templateUrl: './gif-favorites.component.html',
  styleUrls: ['./gif-favorites.component.scss']
})
export class GifFavoritesComponent implements OnInit {
  favorites = [];

  constructor(private snackBar: MatSnackBar,
    private dataService: DataService) { }

  ngOnInit() {
    if (localStorage.getItem('favorite-gifs')) {
      this.favorites = JSON.parse(localStorage.getItem('favorite-gifs'));
    }
    this.dataService.favorites = this.favorites;
  }

  deleteFromFavorites(item) {
    const index = this.favorites.indexOf(item);
    if (index >= 0) {
      this.favorites.splice(index, 1);
      this.snackBar.open('Item deleted from favorites!', '', {
        duration: 3000
      });
    }
    localStorage.setItem('favorite-gifs', JSON.stringify(this.favorites));
  }

}
