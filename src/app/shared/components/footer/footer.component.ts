import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { footerData } from '../../../data/footer.data';
import { FooterData } from '../../../models/footer.model';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  standalone: true
})
export class FooterComponent {
  footerData: FooterData = footerData;
}
