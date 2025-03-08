import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { B2bTabGroupComponent } from './tab-group.component';
import { B2bTabComponent } from '../tab.component';
import { By } from '@angular/platform-browser';

@Component({
    selector: 'b2b-test-tab-group-component',
    template: `
      <b2b-tab-group (tabChange)="onTabChange($event)" [leftArrow]="leftArrow" [rightArrow]="rightArrow">
        @for (tab of tabs; track tab.value) {
            <button b2b-tab [value]="tab.value">{{ tab.label }}</button>
        }
      </b2b-tab-group>
    `,
    standalone: true,
    imports: [B2bTabGroupComponent, B2bTabComponent, NgClass]
})
export class TestB2bTabGroupComponent {
    @Input() leftArrow = false;
    @Input() rightArrow = false;

    tabs = [
        { value: 'tab1', label: 'Tab One' },
        { value: 'tab2', label: 'Tab Two' },
        { value: 'tab3', label: 'Tab Three' },
        { value: 'tab4', label: 'Tab Four' },
        { value: 'tab5', label: 'Tab Five' },
        { value: 'tab6', label: 'Tab Six' },
        { value: 'tab7', label: 'Tab Seven' },
        { value: 'tab8', label: 'Tab Eight' },
    ];
    
    selectedTab = 'tab1';

    onTabChange(tabId: string) {
        this.selectedTab = this.tabs.find(tab => tab.value === tabId)?.value ?? '';
    }
}

describe('B2bTabGroupComponent', () => {
    let component: TestB2bTabGroupComponent;
    let fixture: ComponentFixture<TestB2bTabGroupComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [B2bTabComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestB2bTabGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display initial tabs', () => {
        const tabs = fixture.debugElement.queryAll(By.css('button[b2b-tab]'));
        expect(tabs.length).toBe(8);
    });
});
