import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashactualityComponent } from './dashactuality.component';

describe('DashactualityComponent', () => {
  let component: DashactualityComponent;
  let fixture: ComponentFixture<DashactualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashactualityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashactualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
