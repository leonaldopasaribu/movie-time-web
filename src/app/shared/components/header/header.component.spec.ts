import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle isMobileMenuOpen when toggleMobileMenu is called', () => {
    expect(component.isMobileMenuOpen).toBeFalse();
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen).toBeTrue();
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen).toBeFalse();
  });
});
