import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Job, JobService } from '../core';

@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.scss'],
})
export class JobBoardComponent implements OnInit {
  jobs$: Observable<Job[]>;
  totalJob$: Observable<number>;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.totalJob$ = this.jobService.jobs$.pipe(
      map((value) => {
        return value.length;
      })
    );

    this.jobs$ = this.jobService.jobs$.pipe(
      map((jobs) => {
        return jobs.reduce((newJobs, { department, ...rest }) => {
          if (!newJobs[department]) {
            newJobs[department] = [];
          }
          newJobs[department].push(rest);
          return newJobs;
        }, [] as any);
      })
    );
  }
}
