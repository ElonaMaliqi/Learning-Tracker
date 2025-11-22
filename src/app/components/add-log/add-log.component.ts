import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogService } from '../../services/log.service';
import { StudyLog } from '../../models/study-log.model';

@Component({
  selector: 'app-add-log',
  standalone: false,
  templateUrl: './add-log.component.html',
  styleUrl: './add-log.component.scss',
})
export class AddLogComponent implements OnInit {
  logForm!: FormGroup;
  menuItems = [
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'Add Log', link: '/add' },
    { label: 'View Logs', link: '/logs' },
    { label: 'Timer', link: '/timer' },
    { label: 'Settings', link: '/settings' },
  ];

  constructor(private fb: FormBuilder, private logService: LogService) {}

  ngOnInit(): void {
    // Initialize the form
    this.logForm = this.fb.group({
      topic: ['', Validators.required],
      date: ['', Validators.required],
      duration: ['', [Validators.required, Validators.min(0.1)]],
      notes: [''],
    });
  }
  // Submit form
  onSubmit(): void {
    if (this.logForm.valid) {
      const formValue = this.logForm.value;

      const newLog: StudyLog = {
        id: this.logService.generateId(),
        topic: formValue.topic,
        date: formValue.date,
        duration: formValue.duration,
        notes: formValue.notes,
      };

      this.logService.addLog(newLog);
      this.logForm.reset(); // clear form after submission
      alert('Log added successfully!');
    }
  }
}
