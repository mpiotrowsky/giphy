import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifResultsComponent } from './gif-results.component';

describe('HomeResultsComponent', () => {
  let component: GifResultsComponent;
  let fixture: ComponentFixture<GifResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
