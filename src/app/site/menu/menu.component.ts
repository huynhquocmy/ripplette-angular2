import { Component } from '@angular/core';
import { MenuService } from './menu.service';
import { ActivatedRoute } from '@angular/router';
@Component({
	selector: 'site-menu',
	templateUrl: 'app/site/menu/menu.component.html',
	styleUrls: ['dist/site/menu/menu.component.css']
})

export class MenuComponent {
	id: string;
	private sub: any;
	constructor(
		private menuService: MenuService,
		private route: ActivatedRoute) {
	};

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = params['projectid'];
		})

		this.menuService.getMenu(this.id).subscribe(res => {
			console.log(res);
		})
	}
}