import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponent } from './some.component';
import { DateTime } from 'luxon';

// describe('Bad', () => {
//   let fixture: ComponentFixture<SomeComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SomeComponent ],
//     })
//     .compileComponents();

//     spyOn(DateTime, 'local').and.callFake(() => {
//       return <any>{ toFormat: () => '2019/11/12 13:15' };
//     });
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SomeComponent);
//     fixture.detectChanges();
//   });

//   it('should be renderd now', () => {
//     expect(fixture.debugElement.nativeElement.textContent).toBe('2019/11/12 13:15 なう');
//   });
// });

describe('Good', () => {
  let fixture: ComponentFixture<SomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate(DateTime.fromISO('2019-12-02T09:00').toJSDate());
  });
  afterEach(() => jasmine.clock().uninstall());

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponent);
    fixture.detectChanges();
  });

  it('should be renderd now', () => {
    expect(fixture.debugElement.nativeElement.textContent).toBe('2019/12/02 09:00 なう');
  });
});
