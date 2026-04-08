import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  template: `
    <button
      (click)="handleClick.emit()"
      [disabled]="disabled"
      [class]="getButtonClasses()">
      <ng-content></ng-content>
    </button>
  `,
  standalone: true
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'outline' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled = false;
  @Output() handleClick = new EventEmitter<void>();

  getButtonClasses(): string {
    const baseClasses = `
      inline-flex items-center justify-center gap-3
      font-semibold rounded-lg
      transition-all duration-[400ms]
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const sizeClasses = {
      sm: 'px-6 py-2 text-sm',
      md: 'px-8 py-3 text-base',
      lg: 'px-10 py-4 text-lg'
    };

    const variantClasses = {
      primary: `
        bg-accent text-surface
        hover:bg-accent-hover hover:shadow-glow hover:scale-105
      `,
      outline: `
        border-2 border-accent text-accent
        hover:bg-accent hover:text-surface hover:scale-105
      `
    };

    return `${baseClasses} ${sizeClasses[this.size]} ${variantClasses[this.variant]}`.replace(/\s+/g, ' ').trim();
  }
}
