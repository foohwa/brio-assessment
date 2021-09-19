import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Job } from '../../../core';

@Component({
  selector: 'job-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss'],
})
export class JobItemComponent implements OnInit {
  @Input() job: Partial<Job>;

  display: boolean = false;

  constructor() {}

  ngOnInit() {}

  openModal() {
    this.display = true;
  }

  closeModal($event: boolean) {
    this.display = $event;
  }
}
