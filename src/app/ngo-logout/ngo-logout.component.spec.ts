import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoLogoutComponent } from './ngo-logout.component';

describe('NgoLogoutComponent', () => {
  let component: NgoLogoutComponent;
  let fixture: ComponentFixture<NgoLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
