import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifFavoritesComponent } from './gif-favorites.component';

describe('HomeFavoritesComponent', () => {
  let component: GifFavoritesComponent;
  let fixture: ComponentFixture<GifFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
