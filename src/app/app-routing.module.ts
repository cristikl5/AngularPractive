import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AuthGuard} from "./guards/auth.guard";
import {RegistrationComponent} from "./components/registration/registration.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
