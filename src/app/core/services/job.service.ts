import { Injectable } from '@angular/core';
import { Job } from '../models';
import { BehaviorSubject } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private _jobsSubject$ = new BehaviorSubject<Job[]>(jobs);

  get jobs$() {
    return this._jobsSubject$.asObservable();
  }

  constructor() {}

  updateJob({ id, title, location, level, updatedAt }: Partial<Job>) {
    let updatedJobs: Job[];

    return this.jobs$.pipe(
      take(1),
      map((jobs) => {
        const updatedJobsIndex = jobs.findIndex((oldJob) => {
          return oldJob.id == id;
        });
        updatedJobs = [...jobs];
        const oldJob = updatedJobs[updatedJobsIndex];
        updatedJobs[updatedJobsIndex] = {
          ...oldJob,
          title,
          level,
          location,
          updatedAt,
        };
      }),
      tap(() => {
        this._jobsSubject$.next(updatedJobs);
        console.log(this._jobsSubject$.value);
      })
    );
  }
}

const jobs: Job[] = [
  {
    id: '1',
    title: 'Software Engineer 1',
    location: 'Kuala Lumpur',
    department: 'Tech',
    level: 'Senior',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2020-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Software Engineer 2',
    location: 'Kuala Lumpur',
    department: 'Tech',
    level: 'Junior',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2020-01-01T00:00:00Z',
  },
  {
    id: '3',
    title: 'Software Engineer 3',
    location: 'Kuala Lumpur',
    department: 'Tech',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2020-01-01T00:00:00Z',
  },
  {
    id: '4',
    title: 'Marketing specialist',
    location: 'Kuala Lumpur',
    department: 'Marketing',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2020-01-01T00:00:00Z',
  },
];
