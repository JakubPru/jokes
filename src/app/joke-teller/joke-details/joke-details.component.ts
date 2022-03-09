import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrls: ['./joke-details.component.scss']
})
export class JokeDetailsComponent implements OnInit {

  public joke$: Observable<string>;

  private category: string;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category');
    this.getJoke();
  }

  onClickAnotherOne(): void {
    this.getJoke();
  }

  private getJoke(): void {
    this.joke$ = this.apiService.getRandomJoke(this.category);
  }
}
