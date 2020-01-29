import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoResponseComponent } from './ngo-response.component';

describe('NgoResponseComponent', () => {
  let component: NgoResponseComponent;
  let fixture: ComponentFixture<NgoResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
