import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiterBComponent } from './emiter-b.component';

describe('EmiterBComponent', () => {
  let component: EmiterBComponent;
  let fixture: ComponentFixture<EmiterBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiterBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmiterBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
