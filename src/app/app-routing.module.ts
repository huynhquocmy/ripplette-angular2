import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { SiteComponent } from './site/site.component';
import { PageComponent } from './site/page/page.component';
import { AuthService } from './_auth/auth.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthService] },
  { 
    path: 'site/:projectid',
    component: SiteComponent,
    canActivate: [AuthService],
    children: [
      {path: 'page/:pageid', component: PageComponent}
    ]
  },
  { path: 'site/:projectid/page/:pageid', component: SiteComponent, canActivate: [AuthService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthService]
})
export class AppRoutingModule {}