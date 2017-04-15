import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AuthService } from './_auth/auth.service';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
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