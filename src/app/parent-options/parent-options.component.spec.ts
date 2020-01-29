import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOptionsComponent } from './parent-options.component';

describe('ParentOptionsComponent', () => {
  let component: ParentOptionsComponent;
  let fixture: ComponentFixture<ParentOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
