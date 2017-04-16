import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { ProjectPipe } from './dashboard.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
  	DashboardComponent,
  	ProjectPipe
  ],
  providers: [DashboardService]
})
export class DashboardModule {}