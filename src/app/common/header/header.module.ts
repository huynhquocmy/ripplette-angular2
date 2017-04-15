import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule }  from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { HeaderService } from './header.service';

@NgModule({
  imports: [
  	BrowserModule,
    RouterModule,
  ],
  declarations: [
  	HeaderComponent
  ],
  providers: [HeaderService],
  exports: [HeaderComponent]
})

export class HeaderModule {}