import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPreferenceComponent } from './child-preference.component';

describe('ChildPreferenceComponent', () => {
  let component: ChildPreferenceComponent;
  let fixture: ComponentFixture<ChildPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
