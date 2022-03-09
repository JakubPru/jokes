import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {

  public categories$: Observable<string[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.categories$ = this.apiService.getCategories();
  }

  onClick(category: string) {
    console.log(category);
  }
}
