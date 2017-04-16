import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['dist/dashboard/dashboard.component.css']
})
export class DashboardComponent {
	projects:any = [];

	constructor(private dashboardService: DashboardService) {}

	ngOnInit() {
		this.dashboardService.getProjects().subscribe(data => {
			this.projects = data;
		}, error => {

		})
	}
}