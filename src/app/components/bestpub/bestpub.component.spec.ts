import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestpubComponent } from './bestpub.component';

describe('BestpubComponent', () => {
  let component: BestpubComponent;
  let fixture: ComponentFixture<BestpubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestpubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestpubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
