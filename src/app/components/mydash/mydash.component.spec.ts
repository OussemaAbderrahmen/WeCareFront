import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydashComponent } from './mydash.component';

describe('MydashComponent', () => {
  let component: MydashComponent;
  let fixture: ComponentFixture<MydashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MydashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
