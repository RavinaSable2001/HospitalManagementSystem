import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogloginComponent } from './doglogin.component';

describe('DogloginComponent', () => {
  let component: DogloginComponent;
  let fixture: ComponentFixture<DogloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogloginComponent]
    });
    fixture = TestBed.createComponent(DogloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
