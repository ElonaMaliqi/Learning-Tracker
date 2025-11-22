import { Component } from '@angular/core';
import { TimerService } from '../../services/timer.service';


@Component({
  selector: 'app-timer',
  standalone: false,
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  menuItems = [
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'Add Log', link: '/add' },
    { label: 'View Logs', link: '/logs' },
    { label: 'Timer', link: '/timer' },
    { label: 'Settings', link: '/settings' }
  ];
  
   constructor(public timer: TimerService) {}

  get minutes() {
    return Math.floor(this.timer.timeLeft / 60);
  }

  get seconds() {
    return this.timer.timeLeft % 60;
  }

  start() {
    this.timer.startTimer();
  }

  pause() {
    this.timer.pauseTimer();
  }

  reset() {
    this.timer.resetTimer();
  }
}
