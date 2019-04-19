import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifSearchComponent } from './gif-search.component';

describe('HomeSearchComponent', () => {
  let component: GifSearchComponent;
  let fixture: ComponentFixture<GifSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
