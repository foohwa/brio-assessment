import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent implements OnInit {
  @Input() jobs = {};

  get sectionJobTotal() {
    return Object.values(this.jobs).length;
  }

  constructor() {}

  ngOnInit() {
    console.log(this.jobs);
  }
}
