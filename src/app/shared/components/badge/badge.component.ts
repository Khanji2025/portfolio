import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  imports: [CommonModule],
  template: `
    <span class="
      px-3 py-1 rounded-full
      text-xs font-medium
      bg-accent-subtle text-accent
      border border-accent/20
    ">
      <ng-content></ng-content>
    </span>
  `,
  standalone: true
})
export class BadgeComponent {}
