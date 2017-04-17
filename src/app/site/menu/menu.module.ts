import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';

@NgModule({
	declarations: [MenuComponent],
	exports: [MenuComponent],
	providers: [MenuService]
})
export class MenuModule {}