import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  styleUrls: ['dist/app.component.css'],
  template: `
  	<alert></alert>
  	<layout-header></layout-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }