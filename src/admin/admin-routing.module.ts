import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"dashboard",component:PanelComponent,canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
