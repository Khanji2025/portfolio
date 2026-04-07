import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type CardVariant = 'default' | 'glow' | 'flat';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() variant: CardVariant = 'default';
  @Input() padding = true;

  get classes(): string {
    const base = 'rounded-xl border transition-all duration-300';
    const variants: Record<CardVariant, string> = {
      default: 'bg-bg-card border-border-subtle shadow-card hover:border-accent-cyan/30 hover:shadow-card-hover',
      glow: 'bg-bg-card border-accent-cyan/20 shadow-glow-cyan hover:shadow-[0_0_40px_rgba(0,212,255,0.2)]',
      flat: 'bg-bg-secondary border-border-subtle',
    };
    const paddingClass = this.padding ? 'p-6' : '';
    return `${base} ${variants[this.variant]} ${paddingClass}`;
  }
}
