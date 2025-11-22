import { Injectable } from '@angular/core';
import { StudyLog } from '../models/study-log.model';


@Injectable({
  providedIn: 'root'
})
export class LogService {

  private storageKey = 'studyLogs'; // key used in localStorage
  private logs: StudyLog[] = [];    // in-memory cache

  constructor() {
      this.loadLogs();
   }

    // Load logs from localStorage into memory
  private loadLogs(): void {
    const data = localStorage.getItem(this.storageKey);
    this.logs = data ? JSON.parse(data) : [];
  }

  // Save current logs to localStorage
  private saveLogs(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.logs));
  }

  // Get all logs
  getLogs(): StudyLog[] {
    return this.logs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  // Add a new log
  addLog(log: StudyLog): void {
    this.logs.push(log);
    this.saveLogs();
  }

  // Update an existing log
  updateLog(updatedLog: StudyLog): void {
    const index = this.logs.findIndex(log => log.id === updatedLog.id);
    if (index !== -1) {
      this.logs[index] = updatedLog;
      this.saveLogs();
    }
  }

  // Delete a log
  deleteLog(id: number): void {
    this.logs = this.logs.filter(log => log.id !== id);
    this.saveLogs();
  }

  // Generate a unique ID
  generateId(): number {
    return this.logs.length > 0 ? Math.max(...this.logs.map(log => log.id)) + 1 : 1;
  }
}
