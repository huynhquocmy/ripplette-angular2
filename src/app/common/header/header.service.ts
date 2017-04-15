import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Router, NavigationStart } from '@angular/router';

@Injectable()

export class HeaderService {
	private subject = new Subject();
	keepAfterNavigationChange = false;

	constructor(private router: Router) {
		let user = JSON.parse(localStorage.getItem('currentUser'));
		this.subject.next(user);
	}

	success(message: string) {
		let user = JSON.parse(localStorage.getItem('currentUser'));
		this.subject.next(user);
	}

	error(message: string) {
		this.subject.next({ type: 'error', text: message });
	}

	getLoggedUser(): Observable<any> {
		let user = JSON.parse(localStorage.getItem('currentUser'));
		this.subject.next(user);
		return this.subject.asObservable();
	}


}