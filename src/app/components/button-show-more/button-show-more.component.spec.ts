import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonShowMoreComponent } from './button-show-more.component';

describe('ButtonShowMoreComponent', () => {
  let component: ButtonShowMoreComponent;
  let fixture: ComponentFixture<ButtonShowMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonShowMoreComponent]
    });
    fixture = TestBed.createComponent(ButtonShowMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
