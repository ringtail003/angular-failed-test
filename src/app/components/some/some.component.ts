import { Component, OnInit } from '@angular/core';
import { SomeService } from 'src/app/services/some.service';

@Component({
  selector: 'some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss'],
  providers: [
    SomeService,
  ],
})
export class SomeComponent implements OnInit {
  count: number = null;

  constructor(
    private someService: SomeService,
  ) { }

  ngOnInit() {
    this.count = this.someService.count();
  }

}
