import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: false,
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  isDarkMode = document.body.classList.contains('dark-mode');
  menuItems = [
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'Add Log', link: '/add' },
    { label: 'View Logs', link: '/logs' },
    { label: 'Timer', link: '/timer' },
    { label: 'Settings', link: '/settings' }
  ];

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
