import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { buttonBase } from '../theme/button.theme';

export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button [class]="buttonClasses"><ng-content></ng-content></button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'default';
  @Input() size: ButtonSize = 'default';
  @Input() disabled = false;
  @Input() class = '';

  protected get buttonClasses(): string {
    return [
      buttonBase.base,
      buttonBase.sizes[this.size],
      buttonBase.variants[this.variant],
      this.class
    ].filter(Boolean).join(' ');
  }
}
