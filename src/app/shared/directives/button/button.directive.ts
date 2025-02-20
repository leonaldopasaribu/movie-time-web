import { Directive, HostBinding, Input } from '@angular/core';

import { ButtonTheme } from './button.enum';

@Directive({
  selector: '[appButton]',
})
export class ButtonDirective {
  @Input() padding: string = 'px-4 py-2';
  @Input() disabled: boolean = false;
  @Input() theme: ButtonTheme = ButtonTheme.Primary;

  @HostBinding('class')
  get classes(): string {
    return this.getCssClassBasedOnTheme(this.theme);
  }

  private getCssClassBasedOnTheme(theme: ButtonTheme): string {
    const baseClass = `${this.padding} rounded-full outline-none font-medium transition-all cursor-pointer`;
    const disabledClass = this.disabled
      ? 'bg-gray-400 text-white cursor-not-allowed'
      : '';

    const themeClasses: { [key in ButtonTheme]: string } = {
      [ButtonTheme.Primary]: `bg-red-500 text-white ${disabledClass}`,
      [ButtonTheme.Secondary]: `bg-[#21252B] text-white ${disabledClass}`,
    };

    return `${baseClass} ${themeClasses[theme]}`;
  }
}
