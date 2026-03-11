import { Component } from '@angular/core';
import { TranslatePipe } from '../../i18n/translate.pipe';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {}
