import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponent } from './some.component';
import { By } from '@angular/platform-browser';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('Bad', () => {
  //   component.count = 10;
  //   expect(fixture.debugElement.query(By.css('span')).nativeElement.textContent).toBe('10');
  // });

  it('Good', () => {
    component.count = 10;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('span')).nativeElement.textContent).toBe('10');
  });
});
