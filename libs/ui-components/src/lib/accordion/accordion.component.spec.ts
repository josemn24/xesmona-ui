import { ComponentFixture, TestBed } from '@angular/core/testing';
import { B2bAccordionComponent } from './accordion.component';
import { provideHttpClient } from '@angular/common/http';

describe('B2bAccordionComponent', () => {
  let component: B2bAccordionComponent;
  let fixture: ComponentFixture<B2bAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
      imports: [B2bAccordionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(B2bAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
