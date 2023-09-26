import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-monitor',
  templateUrl: './system-monitor.component.html',
  styleUrls: ['./system-monitor.component.css'],
})
export class SystemMonitorComponent {
  gpuSystemUsage: number = 50;
  memSystemUsage: number = 100;
  cpuSystemUsage: number = 86;

  constructor() {}

  ngOnInit() {}
}
