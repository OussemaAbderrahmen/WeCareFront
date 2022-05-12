import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorconnectComponent } from './errorconnect.component';

describe('ErrorconnectComponent', () => {
  let component: ErrorconnectComponent;
  let fixture: ComponentFixture<ErrorconnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorconnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
