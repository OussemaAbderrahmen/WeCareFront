import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDictionaryComponent } from './update-dictionary.component';

describe('UpdateDictionaryComponent', () => {
  let component: UpdateDictionaryComponent;
  let fixture: ComponentFixture<UpdateDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDictionaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
