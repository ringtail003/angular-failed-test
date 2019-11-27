import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SomeService {
  private config = {} as Config;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getConfig(): Observable<Config> {
    return this.httpClient.get<Config>('/config');
  }
}

export type Config = {
  id: number;
  name: string;
}
