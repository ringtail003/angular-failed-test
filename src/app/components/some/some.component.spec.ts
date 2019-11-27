import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SomeComponent } from './some.component';
import { FormsModule } from '@angular/forms';
import { SomeModule } from '../some.module';
import { OtherComponent } from '../other/other.component';

// describe('Bad', () => {
//   let component: SomeComponent;
//   let fixture: ComponentFixture<SomeComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         SomeComponent,
//         OtherComponent,
//       ],
//       imports: [
//         FormsModule,
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
      imports: [
        SomeModule,
      ],
    })
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
