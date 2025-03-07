import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bPopOverComponent } from './popover.component';

describe('B2bPopoverComponent', () => {
    let component: B2bPopOverComponent;
    let fixture: ComponentFixture<B2bPopOverComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [B2bPopOverComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(B2bPopOverComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have default Popover position as top', () => {
        expect(component.popoverPosition).toBe('top');
    });
});
