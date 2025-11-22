import { Component } from '@angular/core';
import { LogService } from '../../services/log.service';
import { StudyLog } from '../../models/study-log.model';



@Component({
  selector: 'app-log-list',
  standalone: false,
  templateUrl: './log-list.component.html',
  styleUrl: './log-list.component.scss'
})
export class LogListComponent {
  logs: StudyLog[] = [];
  filteredLogs: StudyLog[] = [];
  menuItems = [
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'Add Log', link: '/add' },
    { label: 'View Logs', link: '/logs' },
    { label: 'Timer', link: '/timer' },
    { label: 'Settings', link: '/settings' }
  ];

  constructor(private logService: LogService) { }

  ngOnInit(): void {
    this.logs = this.logService.getLogs();
    this.filteredLogs = [...this.logs];
  }

  applyFilter(filter: { topic: string; minDuration: number }): void {
    this.filteredLogs = this.logs.filter(log =>
      log.topic.toLowerCase().includes(filter.topic) &&
      log.duration >= filter.minDuration
    );
  }

  loadLogs(): void {
    this.logs = this.logService.getLogs();
  }

  deleteLog(id: number): void {
    if (confirm('Are you sure you want to delete this log?')) {
      this.logService.deleteLog(id);
      this.loadLogs(); // refresh list
    }
  }
}
