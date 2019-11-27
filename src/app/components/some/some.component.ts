import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss']
})
export class SomeComponent implements OnInit {
  value = 1;

  constructor() { }

  ngOnInit() {
  }

}
