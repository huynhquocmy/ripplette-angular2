import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['dist/dashboard/dashboard.component.css']
})
export class DashboardComponent {
	constructor(private dashboardService: DashboardService) {}

	ngOnInit() {
		this.dashboardService.getProjects().subscribe(data => {
			console.log(data);
		}, error => {

		})
	}
}