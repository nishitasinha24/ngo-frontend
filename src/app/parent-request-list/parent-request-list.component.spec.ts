import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRequestListComponent } from './parent-request-list.component';

describe('ParentRequestListComponent', () => {
  let component: ParentRequestListComponent;
  let fixture: ComponentFixture<ParentRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
