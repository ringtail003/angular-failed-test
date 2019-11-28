import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from 'rxjs';

export interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getUser(id: number): Rx.Observable<User> {
    return this.httpClient.get<User>(`/users/${id}`);
  }
}
