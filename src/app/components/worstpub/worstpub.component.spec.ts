import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorstpubComponent } from './worstpub.component';

describe('WorstpubComponent', () => {
  let component: WorstpubComponent;
  let fixture: ComponentFixture<WorstpubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorstpubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorstpubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
