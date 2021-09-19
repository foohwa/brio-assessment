import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobBoardComponent } from './job-board.component';
import { SharedModule } from '../shared';
import { JobBoardTitleComponent } from './job-board-title';
import { JobBoardSearchComponent } from './job-board-search';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [CommonModule, SharedModule, InputTextModule],
  declarations: [
    JobBoardComponent,
    JobBoardTitleComponent,
    JobBoardSearchComponent,
  ],
  exports: [JobBoardComponent],
})
export class JobBoardModule {}
