import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bIconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: B2bIconComponent;
  let fixture: ComponentFixture<B2bIconComponent>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(B2bIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have md size by default', () => {
    expect(component.iconSize()).toBe('md');
  });
});
