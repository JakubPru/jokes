import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/app/shared/api.service';

import { JokeDetailsComponent } from './joke-details.component';

describe('JokeDetailsComponent', () => {
  let component: JokeDetailsComponent;
  let fixture: ComponentFixture<JokeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeDetailsComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [{ 
          provide: ApiService, useValue: {
          getRandomJoke() {}
        }}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
