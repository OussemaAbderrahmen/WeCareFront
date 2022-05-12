import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CagnotteupdateComponent } from './cagnotteupdate.component';

describe('CagnotteupdateComponent', () => {
  let component: CagnotteupdateComponent;
  let fixture: ComponentFixture<CagnotteupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CagnotteupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CagnotteupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
