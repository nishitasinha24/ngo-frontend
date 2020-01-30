import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLogoutComponent } from './parent-logout.component';

describe('ParentLogoutComponent', () => {
  let component: ParentLogoutComponent;
  let fixture: ComponentFixture<ParentLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
