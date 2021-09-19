import { Job } from './job.model';

export interface JobBoard {
  [key: string]: Partial<Job>[];
}
