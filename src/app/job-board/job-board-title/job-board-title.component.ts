import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'job-board-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="title-section">
      <h1 class="title-section__title">{{ title }}</h1>
      <p class="title-section__count">{{ jobCount }} jobs</p>
    </div>
  `,
  styleUrls: ['./job-board-title.component.scss'],
})
export class JobBoardTitleComponent implements OnInit {
  @Input() title: string = 'Job Openings';
  @Input() jobCount: number = 1;

  constructor() {}

  ngOnInit(): void {}
}
