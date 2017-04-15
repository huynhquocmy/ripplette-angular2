import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()

export class HttpService {
	constructor(private http: Http) {}
	createAuthorizationHeader(headers: Headers) {
		headers.append('Content-Type', 'application/json');
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		if (currentUser && currentUser.data) {
			headers.append('Authorization', 'Bearer ' + currentUser.data.token);
		}
	}

	get(url: string) {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		return this.http.get(url, {headers: headers});
	}

	post(url:string, data:any) {
		let headers = new Headers();
		this.createAuthorizationHeader(headers);
		return this.http.post(url, data, {headers: headers});
	}
}