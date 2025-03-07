import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bNotificationFloatingComponent } from './notification-floating.component';
import { provideHttpClient } from '@angular/common/http';

describe('B2bNotificationFloatingComponent', () => {
    let component: B2bNotificationFloatingComponent;
    let fixture: ComponentFixture<B2bNotificationFloatingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [provideHttpClient()],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bNotificationFloatingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should set the initial values correctly', () => {
        expect(component.visible).toBe(false);
        expect(component.state).toBe('');
        expect(component.title).toBe('');
        expect(component.description).toBe('');
        expect(component.direction).toBe('bottom');
        expect(component.closable).toBeFalsy();
    });

    it('should emit closeNotification event when onClose is called', () => {
        jest.spyOn(component.closeNotification, 'emit');
        component.onClose();
        expect(component.closeNotification.emit).toHaveBeenCalled();
    });
});
