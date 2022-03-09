import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const URL = 'https://api.chucknorris.io/jokes';
const categoriesSuffix = '/categories';
const randomJokeSuffix = '/random?category=';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(URL + categoriesSuffix, {});
  } 
  getRandomJoke(category: string): Observable<string> {
    return this.httpClient.get<string>(URL + randomJokeSuffix + category, {}).pipe(
      map(res => res['value'])
    )
  }
}
