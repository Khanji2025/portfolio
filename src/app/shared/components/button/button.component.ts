import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() href?: string;
  @Output() clicked = new EventEmitter<void>();

  get classes(): string {
    const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer';
    
    const variants: Record<ButtonVariant, string> = {
      primary: 'bg-accent-cyan text-bg-primary hover:bg-cyan-300 shadow-glow-cyan hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]',
      secondary: 'border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-bg-primary',
      ghost: 'text-text-secondary hover:text-accent-cyan hover:bg-white/5',
    };
    
    const sizes: Record<ButtonSize, string> = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    };
    
    const disabledClasses = this.disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
    
    return `${base} ${variants[this.variant]} ${sizes[this.size]} ${disabledClasses}`;
  }

  handleClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }

  onElementClick(event: MouseEvent): void {
    if (!this.href) {
      event.preventDefault();
      this.handleClick();
    }
  }
}
