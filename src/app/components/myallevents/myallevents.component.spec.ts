import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyalleventsComponent } from './myallevents.component';

describe('MyalleventsComponent', () => {
  let component: MyalleventsComponent;
  let fixture: ComponentFixture<MyalleventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyalleventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyalleventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
