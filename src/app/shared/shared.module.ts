import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Features Component
import { JobItemComponent, JobListComponent } from './job-helpers';
import { HeaderComponent } from './layout';
import { FooterComponent } from './layout';
import { EditJobComponent } from './job-helpers';
import { DaysBetweenPipe } from './pipe';

// PrimeNG
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    JobListComponent,
    JobItemComponent,
    HeaderComponent,
    FooterComponent,
    EditJobComponent,
    DaysBetweenPipe,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DialogModule],
  exports: [
    JobListComponent,
    JobItemComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
