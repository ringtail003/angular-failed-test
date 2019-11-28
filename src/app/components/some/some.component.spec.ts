import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponent } from './some.component';
import { SomeService } from 'src/app/services/some.service';

// describe('Bad(1)', () => {
//   let component: SomeComponent;
//   let fixture: ComponentFixture<SomeComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SomeComponent ],
//       providers: [
//         { provide: SomeService, useValue: { count: () => 100 } }
//       ],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SomeComponent);
//     component = fixture.componentInstance;
//   });

//   it('count should return fake value', () => {
//     expect(component.count).toBe(100);
//   });
// });

// describe('Bad(2)', () => {
//   let component: SomeComponent;
//   let fixture: ComponentFixture<SomeComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ SomeComponent ],
//     })
//     .compileComponents();

//     spyOn(TestBed.get(SomeService), 'count').and.returnValue(200);
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('count should return fake value', () => {
//     expect(component.count).toBe(200);
//   });
// });

describe('Good', () => {
  let component: SomeComponent;
  let fixture: ComponentFixture<SomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponent ],
    })
    .overrideProvider(SomeService, { useValue: { count: () => 100 } })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('count should return fake value', () => {
    expect(component.count).toBe(100);
  });
});
