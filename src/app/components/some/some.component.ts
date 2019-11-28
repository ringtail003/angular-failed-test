import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss'],
  viewProviders:[{
    provide: ControlContainer,
    useExisting: FormGroupDirective,
  }],
})
export class SomeComponent implements OnInit {
  @Input() name: string = null;

  constructor(
  ) { }

  ngOnInit() {
  }

}
