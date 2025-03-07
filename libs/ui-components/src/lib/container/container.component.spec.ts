import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bContainerComponent } from './container.component';

describe('B2bContainerComponent', () => {
  let component: B2bContainerComponent;
  let fixture: ComponentFixture<B2bContainerComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(B2bContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with isFolded as true', () => {
    expect(component.containerFolded()).toBeTruthy();
  });

  it('should toggle containerFolded when toggleCollapse is called', () => {
    fixture.componentRef.setInput('isFoldable', true);
    fixture.detectChanges();
    component.toggleCollapse();
    expect(component.containerFolded()).toBeFalsy();
    component.toggleCollapse();
    expect(component.containerFolded()).toBeTruthy();
  });
});
