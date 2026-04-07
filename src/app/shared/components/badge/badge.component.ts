import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type BadgeVariant = 'cyan' | 'purple' | 'green' | 'pink' | 'default';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'default';
  @Input() text = '';

  get classes(): string {
    const base = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium';
    const variants: Record<BadgeVariant, string> = {
      cyan: 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20',
      purple: 'bg-accent-purple/10 text-purple-400 border border-accent-purple/20',
      green: 'bg-accent-green/10 text-accent-green border border-accent-green/20',
      pink: 'bg-accent-pink/10 text-accent-pink border border-accent-pink/20',
      default: 'bg-white/5 text-text-secondary border border-border-subtle',
    };
    return `${base} ${variants[this.variant]}`;
  }
}
