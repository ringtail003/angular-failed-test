import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomeService {

  constructor() { }

  count() {
    return 1;
  }
}
