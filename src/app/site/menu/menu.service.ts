import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../_services/http.service';
import { AppSettings } from '../../app.settings';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()

export class MenuService {

	private projectUrl = AppSettings.apiURI + 'api/project/';

	constructor(private http: HttpService) {}

	getMenu(id: string) {
		let url = this.projectUrl + id + '/menu';
		return this.http.get(url).map((response: Response) => {
			let body = response.json();
			return body.data || {};
		})
	}
}