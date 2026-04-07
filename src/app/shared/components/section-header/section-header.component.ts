import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-header.component.html',
})
export class SectionHeaderComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() accentWord = '';
  @Input() align: 'left' | 'center' = 'center';
}
