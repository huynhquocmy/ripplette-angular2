import { Component, OnInit, OnDestroy } from '@angular/core';
import { SiteService } from './site.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
	templateUrl: 'app/site/site.component.html',
	styleUrls: ['dist/site/site.component.css']
})
export class SiteComponent implements OnInit {
	id: string;
	project: object;
	page: Array<object>;
	private sub: any;

	constructor(
		private siteService: SiteService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit() {
		this.sub = this.activatedRoute.params.subscribe(params => {
			this.id = params['projectid'];
		}) 
		this.siteService.getProject(this.id).subscribe(res => {
			console.log(res);
			this.project = res;
		})
		this.siteService.getPage(this.id).subscribe(res => {
			this.page = res;
			this.router.navigate(['page', res[0]['id']], {relativeTo: this.activatedRoute});
		})
	}
}