import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss']
})
export class SomeComponent implements OnInit, OnChanges {
  @Input() target: string = null;
  message: string;

  constructor() { }

  ngOnInit() {
    this.message = this.greet();
  }

  ngOnChanges(changes: { target?: SimpleChange }) {
    if (changes.target) {
      this.message = this.greet();
    }
  }

  greet() {
    return`Hello ${this.target}`;
  }

}
