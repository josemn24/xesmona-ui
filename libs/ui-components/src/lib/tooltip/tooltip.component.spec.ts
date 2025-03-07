import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bTooltipComponent } from './tooltip.component';

describe('B2bTooltipComponent', () => {
    let component: B2bTooltipComponent;
    let fixture: ComponentFixture<B2bTooltipComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [B2bTooltipComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(B2bTooltipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have default tooltip position as top', () => {
        expect(component.tooltipPosition).toBe('top');
    });

    it('should have default tooltip color as dark', () => {
        expect(component.tooltipColor).toBe('dark');
    });

    it('should render tooltip text', () => {
        component.tooltip = 'This is a tooltip';
        fixture.detectChanges();
        const tooltipElement = fixture.nativeElement.querySelector('.tooltip');
        expect(tooltipElement.textContent).toContain('This is a tooltip');
    });
});
