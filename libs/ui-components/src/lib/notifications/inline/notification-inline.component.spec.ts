import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bNotificationInlineComponent } from './notification-inline.component';
import { provideHttpClient } from '@angular/common/http';

describe('B2bNotificationInlineComponent', () => {
    let component: B2bNotificationInlineComponent;
    let fixture: ComponentFixture<B2bNotificationInlineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [provideHttpClient()],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(B2bNotificationInlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('should set the visibility correctly', () => {
        component.visible = true;
        fixture.detectChanges();
        const notificationElement = fixture.nativeElement.querySelector('.b2b-notification-inline-container');
        expect(notificationElement).toBeTruthy();
    });

    it('should set the state correctly', () => {
        component.state = 'ok';
        fixture.detectChanges();
        const notificationElement = fixture.nativeElement.querySelector('.b2b-notification-inline-container.ok');
        expect(notificationElement).toBeTruthy();
    });

    it('should set the title correctly', () => {
        component.title = 'Notification Title';
        fixture.detectChanges();
        const titleElement = fixture.nativeElement.querySelector('.b2b-notification-inline-body .title');
        expect(titleElement.textContent).toContain('Notification Title');
    });

    it('should set the description correctly', () => {
        component.description = 'Notification Description';
        fixture.detectChanges();
        const descriptionElement = fixture.nativeElement.querySelector('.b2b-notification-inline-body .description');
        expect(descriptionElement.textContent).toContain('Notification Description');
    });

    it('should emit closeNotification event when closed', () => {
        jest.spyOn(component.closeNotification, 'emit');
        component.onClose();
        expect(component.closeNotification.emit).toHaveBeenCalled();
    });
});
