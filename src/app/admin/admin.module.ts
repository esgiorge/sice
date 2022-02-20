import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { UserComponent } from './pages/user/user.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AdminRoutingModule } from './admin-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { RegistroComponent } from './pages/registro/registro.component';




@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    PersonalComponent,
    UserComponent,
    SettingsComponent,
    SidebarComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimeNgModule
  ]
})
export class AdminModule { }
