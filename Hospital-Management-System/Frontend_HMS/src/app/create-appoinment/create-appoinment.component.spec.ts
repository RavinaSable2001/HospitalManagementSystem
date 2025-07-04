import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppoinmentComponent } from './create-appoinment.component';

describe('CreateAppoinmentComponent', () => {
  let component: CreateAppoinmentComponent;
  let fixture: ComponentFixture<CreateAppoinmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAppoinmentComponent]
    });
    fixture = TestBed.createComponent(CreateAppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
