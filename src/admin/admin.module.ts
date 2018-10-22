import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    AdminRoutingModule
  ],
  declarations: [LoginComponent, PanelComponent]
})
export class AdminModule { }
