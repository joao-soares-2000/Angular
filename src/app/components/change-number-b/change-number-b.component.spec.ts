import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNumberBComponent } from './change-number-b.component';

describe('ChangeNumberBComponent', () => {
  let component: ChangeNumberBComponent;
  let fixture: ComponentFixture<ChangeNumberBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeNumberBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeNumberBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
