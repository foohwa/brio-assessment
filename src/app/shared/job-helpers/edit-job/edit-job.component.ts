import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Job, JobService } from '../../../core';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss'],
})
export class EditJobComponent implements OnInit {
  @Input() job: Partial<Job>;
  @Input() displayModal: boolean = false;
  @Output() update = new EventEmitter<boolean>();

  jobForm: FormGroup;

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobForm = new FormGroup({
      title: new FormControl(this.job.title, Validators.required),
      location: new FormControl(this.job.location, Validators.required),
      level: new FormControl(this.job.level),
    });
  }

  updateJob() {
    if (this.jobForm.invalid) {
      return;
    }

    const updatedJob: Partial<Job> = {
      ...this.job,
      title: this.jobForm.controls.title.value,
      location: this.jobForm.controls.location.value,
      level: this.jobForm.controls.level.value,
      updatedAt: new Date().toISOString(),
    };

    this.jobService.updateJob(updatedJob).subscribe(() => {
      this.closeModal();
    });
  }

  closeModal() {
    this.update.emit(false);
  }
}
