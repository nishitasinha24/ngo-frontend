import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRequestDetailsComponent } from './parent-request-details.component';

describe('ParentRequestDetailsComponent', () => {
  let component: ParentRequestDetailsComponent;
  let fixture: ComponentFixture<ParentRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
