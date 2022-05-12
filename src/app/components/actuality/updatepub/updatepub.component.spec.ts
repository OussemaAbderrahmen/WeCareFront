import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepubComponent } from './updatepub.component';

describe('UpdatepubComponent', () => {
  let component: UpdatepubComponent;
  let fixture: ComponentFixture<UpdatepubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
