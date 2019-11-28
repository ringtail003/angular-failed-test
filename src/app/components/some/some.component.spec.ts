import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

import { SomeComponent } from './some.component';
import { OnInit, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

// describe('Bad', () => {
//   let component: SomeComponent;
//   let fixture: ComponentFixture<SomeComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         SomeComponent,
//       ],
//       imports: [
//         ReactiveFormsModule,
//       ],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(SomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     component.name = 'foo';
//     expect(component).toBeTruthy();
//   });
// });

describe('Good', () => {
  let component: WrapComponent;
  let fixture: ComponentFixture<WrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SomeComponent,
        WrapComponent,
      ],
      imports: [
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(fixture.debugElement.query(By.css('input')).nativeElement.value).toBe('123');
  });
});

@Component({
  template: `
    <form [formGroup]="$form">
      <some [name]="'foo'"></some>
    </form>
  `
})
class WrapComponent implements OnInit {
  $form: FormGroup = null;

  ngOnInit() {
    this.$form = new FormGroup({
      foo: new FormControl('123'),
    });
  }
}