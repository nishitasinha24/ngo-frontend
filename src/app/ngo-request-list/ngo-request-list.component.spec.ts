import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoRequestListComponent } from './ngo-request-list.component';

describe('NgoRequestListComponent', () => {
  let component: NgoRequestListComponent;
  let fixture: ComponentFixture<NgoRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
