import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/main-layout/main-layout').then((m) => m.MainLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
      },
      {
        path: 'services',
        loadComponent: () => import('./pages/services-page/services-page').then((m) => m.ServicesPage),
      },
      {
        path: 'pricing',
        loadComponent: () => import('./pages/pricing-page/pricing-page').then((m) => m.PricingPage),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about-page/about-page').then((m) => m.AboutPage),
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact-page/contact-page').then((m) => m.ContactPage),
      },
      {
        path: 'blog',
        loadComponent: () => import('./pages/blog-page/blog-page').then((m) => m.BlogPage),
      },
    ],
  },
];
