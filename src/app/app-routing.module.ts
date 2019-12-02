import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
// import {AdminComponent} from "../../projects/admin/src/app/app.component";

// Guards
import { AuthGuardService } from './guards/auth-guard.service';
import { AdminGuardService } from './guards/admin-guard.service';

const routes: Routes = [
  {
    path: '', component: HomePageComponent, canActivate: [
      AuthGuardService
    ]
  },
  {
    path: 'admin',
    loadChildren: '../../projects/module-admin/src/app/admin.module#AdminModule',
    canActivate: [
      AdminGuardService,
      AuthGuardService
    ]
  },
  {
    path: 'auth', component: AuthorizationPageComponent
  },
  {
    path: '**', redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
