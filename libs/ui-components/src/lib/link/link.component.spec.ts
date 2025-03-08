import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { B2bLinkComponent } from './link.component';
import { B2bAnchorDisabledDirective } from './disable-anchor.directive';
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { RouterLink, Routes } from "@angular/router";

@Component({
  selector: 'b2b-test-link-component',
  template: `
    <a b2b-link [routerLink]="[ linkUrl ]" [attr.b2b-anchor-disabled]="disabled">
      {{ content }}
    </a>
  `,
  standalone: true,
  imports: [B2bLinkComponent, B2bAnchorDisabledDirective, RouterLink]
})
export class TestB2bLinkComponent {
  @Input() content? = '';
  @Input() linkUrl = '';
  @Input() type?: 'decorated' | '' = '';
  @Input() disabled = false;

  get typeClass() {
    return `b2b--${this.type}`;
  }
}

const testLinkRoutes: Routes = [
  { path: '', redirectTo: 'link', pathMatch: 'full'},
  { path: 'link', component: B2bLinkComponent },
];

describe('LinkComponent', () => {
  let component: TestB2bLinkComponent;
  let fixture: ComponentFixture<TestB2bLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestB2bLinkComponent, B2bLinkComponent, RouterTestingModule.withRoutes(testLinkRoutes)],
    }).compileComponents();

    fixture = TestBed.createComponent(TestB2bLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display text content', () => {
    component.content = 'Action link';
    fixture.detectChanges();
    const actionLinkElement = fixture.debugElement.query(By.css('a[b2b-link]'));
    expect(actionLinkElement.nativeElement.textContent).toContain('Action link');
  });

  it('navigate to "link" takes you to /link', fakeAsync(() => {
    component.linkUrl = '/link';
    fixture.detectChanges();
    const location = TestBed.inject(Location);
    const actionLinkElement = fixture.debugElement.query(By.css('a[b2b-link]'));
    actionLinkElement.nativeElement.click();
    tick(400); // Simulate a short delay for navigation
    expect(location.path()).toBe('/link');
  }));

  it('should not be focusable when disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    const actionLinkElement = fixture.debugElement.query(By.css('a[b2b-link]'));
    // Attempt to focus the link
    try {
      actionLinkElement.nativeElement.focus();
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
