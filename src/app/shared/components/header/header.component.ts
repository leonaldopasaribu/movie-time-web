import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly navLinks = [
    {
      label: 'CATEGORIES',
      route: '/categories',
      icon: 'assets/icons/menu.svg',
    },
    { label: 'MOVIES', route: '/movies' },
    { label: 'TV SHOWS', route: '/tv-shows' },
    { label: 'LOGIN', route: '/login' },
  ];
}
