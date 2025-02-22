import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';

import { ButtonDirective } from './button.directive';
import { ButtonTheme } from './button.enum';

@Component({
  template: `
    <button
      appButton
      [padding]="padding"
      [theme]="theme"
      [disabled]="disabled"
      id="BtnTest"
    ></button>
  `,
  imports: [ButtonDirective],
})
class TestComponent {
  padding: string = 'px-4 py-2';
  theme: ButtonTheme = ButtonTheme.Primary;
  disabled: boolean = false;
}

describe('ButtonDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let button: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent, ButtonDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    button = fixture.nativeElement.querySelector('#BtnTest');
  });

  it('should apply default classes', () => {
    fixture.detectChanges();
    expect(button.className).toContain('px-4 py-2');
    expect(button.className).toContain('rounded-full');
    expect(button.className).toContain('outline-none');
    expect(button.className).toContain('font-medium');
    expect(button.className).toContain('transition-all');
    expect(button.className).toContain('cursor-pointer');
  });

  it('should apply primary theme classes by default', () => {
    fixture.detectChanges();
    expect(button.className).toContain('bg-red-500');
    expect(button.className).toContain('text-white');
  });

  it('should apply secondary theme classes when set', () => {
    component.theme = ButtonTheme.Secondary;
    fixture.detectChanges();
    expect(button.className).toContain('bg-[#21252B]');
    expect(button.className).toContain('text-white');
  });

  it('should apply disabled styles when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    expect(button.className).toContain('bg-gray-400');
    expect(button.className).toContain('text-white');
    expect(button.className).toContain('cursor-not-allowed');
  });
});
