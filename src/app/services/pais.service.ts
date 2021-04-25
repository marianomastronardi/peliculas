import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) { }

  getAllPaises():any{
      return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}
