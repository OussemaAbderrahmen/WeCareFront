import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostComplainerComponent } from './most-complainer.component';

describe('MostComplainerComponent', () => {
  let component: MostComplainerComponent;
  let fixture: ComponentFixture<MostComplainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostComplainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostComplainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
