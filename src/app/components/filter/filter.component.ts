import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Output() filterChanged = new EventEmitter<{ topic: string; minDuration: number }>();

  topicFilter: string = '';
  minDuration: number = 0;

  onFilterChange(): void {
    this.filterChanged.emit({
      topic: this.topicFilter.toLowerCase(),
      minDuration: this.minDuration
    });
  }
}
