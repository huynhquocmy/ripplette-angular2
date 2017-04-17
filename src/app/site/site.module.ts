import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageModule } from './page/page.module';
import { SiteComponent } from './site.component';
import { MenuModule } from './menu/menu.module';
import { SiteService } from './site.service';

@NgModule({
	imports: [
		RouterModule,
		MenuModule,
		PageModule
	],
	declarations: [
		SiteComponent
	],
	providers: [SiteService]
})

export class SiteModule {
}