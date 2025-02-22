import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgClass } from '@angular/common';
import { By } from '@angular/platform-browser';

import { MoviesGridComponent } from './movies-grid.component';
import { CardComponent } from 'src/app/shared/components/card';
import { MOVIES_ENTITY_MOCK } from 'src/app/shared/mocks/movie.mock';

describe('MoviesGridComponent', () => {
  let component: MoviesGridComponent;
  let fixture: ComponentFixture<MoviesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent, MoviesGridComponent, NgClass],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct number of movies', () => {
    component.movies = MOVIES_ENTITY_MOCK;
    fixture.detectChanges();

    const movieCards = fixture.debugElement.queryAll(By.css('app-card'));
    expect(movieCards.length).toBe(2);
  });

  it('should emit clicked event when onViewButtonClick is called', () => {
    spyOn(component.clicked, 'emit');
    const imdbID = 'test123';

    component.onViewButtonClick(imdbID);

    expect(component.clicked.emit).toHaveBeenCalledWith(imdbID);
  });
});
