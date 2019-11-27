import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  message: string = null;

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit() {
    this.httpClient
      .get<string>('http://example.com')
      .subscribe((message) => this.message = message)
    ;
  }

}
