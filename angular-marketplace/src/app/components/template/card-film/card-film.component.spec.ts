import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilmComponent } from './card-film.component';

describe('CardFilmComponent', () => {
  let component: CardFilmComponent;
  let fixture: ComponentFixture<CardFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFilmComponent]
    });
    fixture = TestBed.createComponent(CardFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
