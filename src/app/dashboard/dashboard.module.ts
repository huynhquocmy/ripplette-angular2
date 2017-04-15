import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../common/header/header.module';
import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule
  ],
  declarations: [
  	DashboardComponent
  ],
  providers: [DashboardService]
})
export class DashboardModule {}