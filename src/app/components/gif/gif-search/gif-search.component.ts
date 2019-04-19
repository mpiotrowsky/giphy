import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { GifSearchService } from '../../../services/gif-search.service';

@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.scss']
})
export class GifSearchComponent implements OnInit {
  phrase = new FormControl('');
  searchForm: FormGroup = this.builder.group({
    phrase: this.phrase,
  });

  constructor(private builder: FormBuilder,
    private searchService: GifSearchService) { }

  ngOnInit() {
  }

  search() {
    this.searchService.search(this.phrase.value).subscribe(
      response => this.searchService.updateResults(response),
      error => console.log(error)
    );
  }

}
