import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotstatComponent } from './notstat.component';

describe('NotstatComponent', () => {
  let component: NotstatComponent;
  let fixture: ComponentFixture<NotstatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotstatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
