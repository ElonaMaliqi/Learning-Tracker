import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  timeLeft = 25 * 60; // 25 minutes
  breakTime = 5 * 60; // 5 minutes
  isRunning = false;
  isBreak = false;
  interval: any;

  startTimer() {
    if (this.isRunning) return;

    this.isRunning = true;

    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.finishTimer();
      }
    }, 1000);
  }

  finishTimer() {
    clearInterval(this.interval);
    this.isRunning = false;

    if (!this.isBreak) {
      alert("Work session complete! Time for a break!");
      this.startBreak();
    } else {
      alert("Break is over. Ready to start another session?");
      this.resetWork();
    }
  }

  startBreak() {
    this.isBreak = true;
    this.timeLeft = this.breakTime;
    this.startTimer();
  }

  resetWork() {
    this.isBreak = false;
    this.timeLeft = 25 * 60;
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.isRunning = false;
  }

  resetTimer() {
    this.pauseTimer();
    this.isBreak = false;
    this.timeLeft = 25 * 60;
  }
}
