import { Component } from '@angular/core';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';

@Component({
	templateUrl: 'app/common/header/header.component.html',
	selector: 'layout-header',
	styleUrls: ['dist/common/header/header.component.css']
})
export class HeaderComponent {
	user:any;
	constructor(private headerService: HeaderService, private router: Router) {}

	ngOnInit() {
		this.headerService.getLoggedUser().subscribe(user => { 
			this.user = user;
		});
	}
	
	logout() {
		localStorage.removeItem('currentUser');
		this.router.navigate(['login']);
	}
};
