import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemMonitorComponent } from './pages/system-monitor/system-monitor.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
