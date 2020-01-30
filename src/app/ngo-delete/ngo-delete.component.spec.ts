import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoDeleteComponent } from './ngo-delete.component';

describe('NgoDeleteComponent', () => {
  let component: NgoDeleteComponent;
  let fixture: ComponentFixture<NgoDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
