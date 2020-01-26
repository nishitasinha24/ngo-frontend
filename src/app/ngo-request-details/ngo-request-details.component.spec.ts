import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoRequestDetailsComponent } from './ngo-request-details.component';

describe('NgoRequestDetailsComponent', () => {
  let component: NgoRequestDetailsComponent;
  let fixture: ComponentFixture<NgoRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
