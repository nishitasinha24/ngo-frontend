import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalAdoptionStatusComponent } from './final-adoption-status.component';

describe('FinalAdoptionStatusComponent', () => {
  let component: FinalAdoptionStatusComponent;
  let fixture: ComponentFixture<FinalAdoptionStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalAdoptionStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalAdoptionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
