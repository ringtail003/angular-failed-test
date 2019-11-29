import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss']
})
export class SomeComponent implements OnInit {
  message = '';

  constructor() { }

  ngOnInit() {
    this.message = DateTime.local().toFormat('yyyy/MM/dd hh:mm');
  }
}
