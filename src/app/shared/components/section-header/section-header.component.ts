import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  imports: [CommonModule],
  template: `
    <div class="mb-16" [class.text-center]="centered">
      <!-- Label -->
      <h2 class="
        text-sm font-mono uppercase tracking-widest
        text-accent
        mb-3
      ">
        {{ label }}
      </h2>

      <!-- Subtitle (optional) -->
      <p *ngIf="subtitle" class="
        text-xl md:text-2xl font-semibold
        text-text-primary
        mb-4
      ">
        {{ subtitle }}
      </p>

      <!-- Accent Line -->
      <div class="
        w-12 h-1 rounded-full
        bg-accent
        mt-4
      " [class.mx-auto]="centered"></div>
    </div>
  `,
  standalone: true
})
export class SectionHeaderComponent {
  @Input() label: string = '';
  @Input() subtitle?: string;
  @Input() centered: boolean = false;
}
