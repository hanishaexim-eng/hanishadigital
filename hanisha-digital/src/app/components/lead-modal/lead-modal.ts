import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LeadModalService } from '../../core/lead-modal.service';

@Component({
  selector: 'app-lead-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './lead-modal.html',
  styleUrl: './lead-modal.scss',
})
export class LeadModalComponent {
  private readonly fb = inject(FormBuilder);
  protected readonly modal = inject(LeadModalService);

  submitted = false;

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    budget: [''],
    message: ['', [Validators.required, Validators.minLength(15)]],
  });

  close(): void {
    this.modal.hide();
    this.submitted = false;
  }

  submit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { name, email, budget, message } = this.form.value;
    const body = `Name: ${name}\nEmail: ${email}\nBudget: ${budget || '—'}\n\n${message}`;
    window.location.href = `mailto:hanishaexim@gmail.com?subject=${encodeURIComponent('Lead — ' + name)}&body=${encodeURIComponent(body)}`;
    this.close();
    this.form.reset();
  }

  backdropClick(ev: MouseEvent): void {
    if ((ev.target as HTMLElement).classList.contains('lead-modal__backdrop')) {
      this.close();
    }
  }

  err(field: 'name' | 'email' | 'message'): boolean {
    const c = this.form.controls[field];
    return (c.touched || this.submitted) && c.invalid;
  }
}
