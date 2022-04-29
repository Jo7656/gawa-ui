import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PluginDetailsComponent } from './components/plugins/plugin-details/plugin-details.component';
import { PluginsListComponent } from './components/plugins/plugins-list/plugins-list.component';
import { PluginsComponent } from './components/plugins/plugins.component';
import { RouteDetailsComponent } from './components/routes/route-details/route-details.component';
import { RoutesComponent } from './components/routes/routes.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'plugins', component: PluginsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'routes', component: RoutesComponent },
  { path: 'route/:id', component: RouteDetailsComponent },
  { path: 'plugins/all', component: PluginsListComponent },
  { path: 'plugins/add/:name', component: PluginDetailsComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
