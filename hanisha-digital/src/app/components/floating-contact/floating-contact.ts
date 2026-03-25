import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LeadModalService } from '../../core/lead-modal.service';

@Component({
  selector: 'app-floating-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './floating-contact.html',
  styleUrl: './floating-contact.scss',
})
export class FloatingContactComponent {
  protected readonly lead = inject(LeadModalService);
}
