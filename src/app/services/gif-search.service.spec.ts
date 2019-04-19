import { TestBed } from '@angular/core/testing';

import { GifSearchService } from './gif-search.service';

describe('SearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GifSearchService = TestBed.get(GifSearchService);
    expect(service).toBeTruthy();
  });
});
