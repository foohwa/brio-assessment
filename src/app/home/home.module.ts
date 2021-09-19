import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// Feature Module
import { JobBoardModule } from '../job-board';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, JobBoardModule, SharedModule],
})
export class HomeModule {}
