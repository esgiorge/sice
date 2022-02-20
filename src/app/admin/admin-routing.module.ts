import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children: [
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'personal',
        component:PersonalComponent
      },
      {
        path:'user',
        component:UserComponent
      },
      {
        path:'settings',
        component:SettingsComponent
      },
      {
        path:'registro',
        component:RegistroComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
]


@NgModule({
 
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule { }
