import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLogComponent } from './components/add-log/add-log.component';
import { LogListComponent } from './components/log-list/log-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TimerComponent } from './components/timer/timer.component';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add', component: AddLogComponent },
  { path: 'logs', component: LogListComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'timer', component: TimerComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
