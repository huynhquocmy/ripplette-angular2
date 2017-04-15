import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../_services/http.service';
import { AppSettings } from '../app.settings';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class DashboardService {
	
	private projectsUrl = AppSettings.apiURI + 'api/dashboard';

	constructor(private http: HttpService) {}

	getProjects() {
		return this.http.get(this.projectsUrl).map(response => {
			console.log(response);
		})
	}

	ngOnInit() {

	}
}