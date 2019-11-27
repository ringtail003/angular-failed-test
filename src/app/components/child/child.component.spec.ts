import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as Rx from 'rxjs';

import { ChildComponent } from './child.component';
import { HttpClient } from '@angular/common/http';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildComponent ],
      providers: [
        { provide: HttpClient, useValue: { get: () => Rx.of('test') } },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
