import { NgModule } from '@angular/core';
import { AlertService } from './alert.service';
import { AlertComponent } from './alert.component';
import { BrowserModule }  from '@angular/platform-browser';

@NgModule( {
	imports: [
		BrowserModule
	],
	declarations: [
		AlertComponent
	],
	providers: [
		AlertService
	],
	exports: [AlertComponent]
})

export class AlertModule {}