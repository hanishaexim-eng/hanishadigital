import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';
import { SeoService } from '../../core/seo.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly seo = inject(SeoService);

  submitted = false;

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    message: ['', [Validators.required, Validators.minLength(15)]],
  });

  ngOnInit(): void {
    this.seo.apply({
      title: 'Contact',
      description:
        'Contact Hanisha Exim for startup IT projects — SaaS, ecommerce, and healthcare software. Email hanishaexim@gmail.com',
      keywords: 'contact Hanisha Exim, startup development inquiry, MVP quote',
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const mailto = `mailto:hanishaexim@gmail.com?subject=${encodeURIComponent('Project inquiry from ' + this.form.value.name)}&body=${encodeURIComponent(
      `Name: ${this.form.value.name}\nEmail: ${this.form.value.email}\nCompany: ${this.form.value.company || '—'}\n\n${this.form.value.message}`,
    )}`;
    window.location.href = mailto;
  }

  /** Template helpers */
  showError(field: 'name' | 'email' | 'message'): boolean {
    const c = this.form.controls[field];
    return (c.touched || this.submitted) && c.invalid;
  }
}
