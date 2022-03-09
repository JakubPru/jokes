import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>("https://api.chucknorris.io/jokes/categories", {});
  } 
  getRandomJoke(category: string): Observable<string> {
    return this.httpClient.get<string>("https://api.chucknorris.io/jokes/random?category=" + category, {});
  }
}
