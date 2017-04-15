import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { AlertService } from '../common/alert/alert.service';

@Component({
	// encapsulation: ViewEncapsulation.None,
  	templateUrl: 'app/login/login.component.html',
  	// styles: [':host { display: block; border: 1px solid black;}'],
  	styleUrls: ['dist/login/login.component.css'],
  	providers: [ LoginService ]
})
export class LoginComponent implements OnInit {
	// public newUser = new User('developer@ripplewerkz.com', 'Password5%');
	model: any = {};
	loading = false;
	returnUrl: string;

	constructor (
		private loginService: LoginService,
		private router: Router,
		private route: ActivatedRoute,
		private alertService: AlertService) {}

	login() {
		this.loginService.login(this.model.email, this.model.password)
			.subscribe(
				user => {
					this.router.navigate([this.returnUrl]);
				},
				error => {
					this.alertService.error(error);
					this.loading = false;
				}
			)
	}
	ngOnInit() {
		this.loginService.logout();
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
	}

}