import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardComponent } from './components/card/card.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SystemMonitorComponent } from './pages/system-monitor/system-monitor.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { IgxProgressBarModule } from 'igniteui-angular';

@NgModule({
  declarations: [AppComponent, CardComponent, SystemMonitorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    IgxProgressBarModule,
    MatIconModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
