import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrievecagnotteComponent } from './retrievecagnotte.component';

describe('RetrievecagnotteComponent', () => {
  let component: RetrievecagnotteComponent;
  let fixture: ComponentFixture<RetrievecagnotteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrievecagnotteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrievecagnotteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
