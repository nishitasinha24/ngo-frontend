import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOptionsComponent } from './child-options.component';

describe('ChildOptionsComponent', () => {
  let component: ChildOptionsComponent;
  let fixture: ComponentFixture<ChildOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
