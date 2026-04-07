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

  get titleParts(): [string, string] {
    if (!this.accentWord) return [this.title, ''];
    const idx = this.title.indexOf(this.accentWord);
    if (idx === -1) return [this.title, ''];
    return [
      this.title.slice(0, idx),
      this.title.slice(idx + this.accentWord.length),
    ];
  }
}
