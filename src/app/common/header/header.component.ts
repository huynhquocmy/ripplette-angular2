import { Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
	templateUrl: 'app/common/header/header.component.html',
	selector: 'layout-header',
	styleUrls: ['dist/common/header/header.component.css']
})
export class HeaderComponent {
	user:any = {};
	constructor(private headerService: HeaderService) {}

	ngOnInit() {
		// this.user = JSON.parse(localStorage.getItem('currentUser'));
		this.headerService.getLoggedUser().subscribe(user => { 
			console.log(user);
			this.user = user;
		});
	}
	
};
