import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Project } from '../_models/project';
import { Router } from '@angular/router';

@Component({
  	templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['dist/dashboard/dashboard.component.css']
})
export class DashboardComponent {
	projects: any = [];

	constructor(
		private dashboardService: DashboardService,
		private router: Router
	) {}

	ngOnInit() {
		this.dashboardService.getProjects().subscribe(data => {
			this.projects = data;
		}, error => {

		})
	}

	onSelect(project: Project) {
		this.router.navigate(['site', project.id]);
	}
}