import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../_models/user';
import { AppSettings } from '../app.settings';
import { HttpService } from '../_services/http.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {
	private loginUrl = AppSettings.apiURI + 'api/login';
	constructor (private http: HttpService) {}

	login(email: string, password: string) {
		return this.http.post(this.loginUrl, JSON.stringify({email: email, password: password}))
			.map((response: Response) => {
				let user = response.json();
				if (user && user.data && user.data.token) {
					localStorage.setItem('currentUser', JSON.stringify(user));
				}
			})
			// .catch(this.handleError);
	}

	logout() {
		localStorage.removeItem('currentUser');
	}

	private handleError (error: Response | any) {
	  // In a real world app, you might use a remote logging infrastructure
	  let errMsg: string;
	  if (error instanceof Response) {
	    const body = error.json() || '';
	    const err = body.error || JSON.stringify(body);
	    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	  } else {
	    errMsg = error.message ? error.message : error.toString();
	  }
	  console.error(errMsg);
	  return Observable.throw(errMsg);
	}

}
