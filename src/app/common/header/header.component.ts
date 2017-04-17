import { Component } from '@angular/core';
import { HeaderService } from './header.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: 'app/common/header/header.component.html',
	selector: 'layout-header',
	styleUrls: ['dist/common/header/header.component.css']
})
export class HeaderComponent {
	
	user: any;
	hasHeader = true;
	path: Array<string> = ['/dashboard'];
	private sub: any;
	
	constructor(
		private headerService: HeaderService,
		private router: Router,
		private route: ActivatedRoute) {}
	
	ngOnInit() {
		let _me = this;
		this.headerService.getLoggedUser().subscribe(user => { 
			if (_me.path.indexOf(_me.router.url) === -1) {
				_me.hasHeader = false;
			} else {
				_me.hasHeader = true;
			}
			this.user = user;
		});
	}
	
	logout() {
		localStorage.removeItem('currentUser');
		this.router.navigate(['login']);
	}
};
