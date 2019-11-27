import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as Rx from 'rxjs';
import { SomeComponent } from './some.component';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// describe('Bad', () => {
//   let component: SomeComponent;
//   let fixture: ComponentFixture<SomeComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       providers: [{
//         provide: HttpClient, useValue: { get: () => Rx.of('dummy') }
//       }],
//       declarations: [
//         SomeComponent,
//         ChildComponent,
//       ],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

describe('Good', () => {
  let component: SomeComponent;
  let fixture: ComponentFixture<SomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SomeComponent,
        ChildComponent,
      ],
    })
    .overrideComponent(ChildComponent, {})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'child',
  template: '',
})
class ChildComponent {}
