import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['dist/app.component.css',
  			'dist/assets/scss/base/base.css',
  			'dist/assets/scss/base/buttons.css',
  			'dist/assets/scss/base/fonts.css',
  			'dist/assets/scss/base/component.css'],
  template: `
  	<alert></alert>
    <layout-header></layout-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }