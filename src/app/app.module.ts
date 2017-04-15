import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { DashboardModule }   from './dashboard/dashboard.module';
import { requestOptionsProvider }   from './default-request-options.service';
import { HttpService } from './_services/http.service';
import { AlertModule } from './common/alert/alert.module';
import { HeaderModule } from './common/header/header.module';


@NgModule({
  imports: [
    HttpModule,
    JsonpModule,
    CommonModule,
    BrowserModule,
    HeaderModule,
    AlertModule,
    FormsModule,
    LoginModule,
    DashboardModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ requestOptionsProvider, HttpService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }