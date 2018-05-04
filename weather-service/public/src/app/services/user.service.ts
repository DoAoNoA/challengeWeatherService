import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cities } from '../Cities';
import "rxjs/Rx";

@Injectable()
export class UserService {
  domain: String = 'http://localhost:3003';

  constructor(private http: HttpClient) { }

  getCities(){
    return this.http.get<Cities[]>(`${this.domain}/api/cities`)
      .map(res => res);
  }
  
  getLocation(){
    return this.http.get<Cities[]>(`${this.domain}/api/users/5aea6605f59d807ff44b5865`)
      .map(res => res);
  }
  
  addCity(newCity: Cities) {
    return this.http.post<Cities>(`${this.domain}/api/cities`, newCity)
       .map(res => res);
  }
  
}
