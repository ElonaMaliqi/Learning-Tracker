import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddLogComponent } from './components/add-log/add-log.component';
import { LogListComponent } from './components/log-list/log-list.component';
import { LogItemComponent } from './components/log-item/log-item.component';
import { FilterComponent } from './components/filter/filter.component';
import { ChartComponent } from './components/chart/chart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TimerComponent } from './components/timer/timer.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HamburgerMenuComponent } from './shared/hamburger-menu/hamburger-menu.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AddLogComponent,
    LogListComponent,
    LogItemComponent,
    FilterComponent,
    ChartComponent,
    ThemeToggleComponent,
    SidebarComponent,
    TimerComponent,
    SettingsComponent,
    HamburgerMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
