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

}
