import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemMonitorComponent } from './pages/system-monitor/system-monitor.component';

const routes: Routes = [
  { path: 'system-monitor', component: SystemMonitorComponent },
  { path: '', redirectTo: '/system-monitor', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
