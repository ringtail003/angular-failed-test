import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss']
})
export class SomeComponent implements OnInit {
  @Input() count: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
