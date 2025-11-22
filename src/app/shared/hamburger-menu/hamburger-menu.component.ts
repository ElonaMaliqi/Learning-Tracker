import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  standalone: false,
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss'
})
export class HamburgerMenuComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @Input() menuItems: { label: string; link: string }[] = [];

}
