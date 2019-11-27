import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponent } from './some.component';
import { By } from '@angular/platform-browser';
import { Component, SimpleChange } from '@angular/core';

describe('SomeComponent', () => {
  let component: SomeComponent;
  let fixture: ComponentFixture<SomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('Bad', () => {
  //   component.target = 'Angular';
  //   expect(fixture.debugElement.query(By.css('span')).nativeElement.textContent).toBe('Hello Angular');
  // });

  it('Good', () => {
    component.target = 'Angular';
    component.ngOnChanges({
      target: new SimpleChange(null, component.target, false),
    });
    fixture.detectChanges();

    expect(fixture.debugElement.nativeElement.textContent).toBe('Hello Angular');
  });
});


@Component({
  selector: 'wrapped',
  template: '<some [target]="target"></some>',
})
class WrappedComponent {
  target = '';
}

describe('SomeComponent', () => {
  let wrapped: WrappedComponent;
  let fixture: ComponentFixture<WrappedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeComponent, WrappedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrappedComponent);
    wrapped = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Good', () => {
    wrapped.target = 'Angular';
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.textContent).toBe('Hello Angular');
  });
});