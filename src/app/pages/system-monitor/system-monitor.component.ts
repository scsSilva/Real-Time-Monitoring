import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-monitor',
  templateUrl: './system-monitor.component.html',
  styleUrls: ['./system-monitor.component.css'],
})
export class SystemMonitorComponent {
  gpuSystemUsage!: number;
  memSystemUsage!: number;
  cpuSystemUsage!: number;

  constructor() {}

  ngOnInit() {}
}
