import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { LogService } from '../../services/log.service';
import { StudyLog } from '../../models/study-log.model';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;
  logs: StudyLog[] = [];
  totalHours: number = 0;
  averageHours = 0;
  activityGrid: { date: Date; hours: number }[] = [];
  menuItems = [
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'Add Log', link: '/add' },
    { label: 'View Logs', link: '/logs' },
    { label: 'Timer', link: '/timer' },
    { label: 'Settings', link: '/settings' },
  ];

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logs = this.logService.getLogs();
    this.totalHours = this.logs.reduce((acc, log) => acc + log.duration, 0);
    this.averageHours = this.logs.length
      ? this.totalHours / this.logs.length
      : 0;
    this.generateActivityGrid();
  }

  ngAfterViewInit(): void {
    if (this.logs.length > 0) {
      this.createChart();
    }
  }

  createChart(): void {
    const topicMap: { [key: string]: number } = {};
    this.logs.forEach((log) => {
      topicMap[log.topic] = (topicMap[log.topic] || 0) + log.duration;
    });

    const labels = Object.keys(topicMap);
    const data = Object.values(topicMap);

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Study Hours',
            data,
            backgroundColor: 'rgba(59, 101, 122, 0.9)',
            barThickness: 80,
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
          title: { display: true, text: 'Study Chart' },
        },
        scales: {
          y: { beginAtZero: true },
        },
      },
    };

    this.chart = new Chart(this.chartCanvas.nativeElement, config);
  }

  getColorForTopic(topic: string): string {
    const colors = [
      '#4caf50', 
      '#2196f3', 
      '#ff9800', 
      '#e91e63', 
      '#9c27b0', 
    ];

    // simple hash pick consistent color for each topic
    const index =
      Math.abs(
        topic.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
      ) % colors.length;
    return colors[index];
  }

  generateActivityGrid() {
    const today = new Date();
    const daysBack = 120; // show last 4 months 

    const grid: any[] = [];

    for (let i = 0; i < daysBack; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i);

      const sameDayLogs = this.logs.filter((log) => {
        const logDate = new Date(log.date);
        return (
          logDate.getFullYear() === date.getFullYear() &&
          logDate.getMonth() === date.getMonth() &&
          logDate.getDate() === date.getDate()
        );
      });

      const hours = sameDayLogs.reduce((acc, log) => acc + log.duration, 0);

      grid.unshift({ date, hours });
    }

    this.activityGrid = grid;
  }

  getColorFromHours(hours: number): string {
    if (hours === 0) return 'var(--grid-empty)';
    if (hours <= 1) return 'var(--grid-1)';
    if (hours <= 2) return 'var(--grid-2)';
    if (hours <= 4) return 'var(--grid-3)';
    return 'var(--grid-4)';
  }
}
