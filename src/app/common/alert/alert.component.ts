import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
	// moduleId: module.id,
	selector: 'alert',
	templateUrl: 'app/common/alert/alert.component.html',
	styleUrls: ['app/common/alert/alert.component.scss']
})

export class AlertComponent {
	message: any;
	constructor(private alertService: AlertService) {}

	ngOnInit() {
		this.alertService.getMessage().subscribe(message => {
			this.message = message;
		});
	}
}
