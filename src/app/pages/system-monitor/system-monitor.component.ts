import { Component, NgZone, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-system-monitor',
  templateUrl: './system-monitor.component.html',
  styleUrls: ['./system-monitor.component.css'],
})
export class SystemMonitorComponent implements OnInit {
  gpuSystemUsage: number = 0;
  memSystemUsage: number = 0;
  cpuSystemUsage: number = 0;

  constructor(private dataService: DataService, private ngZone: NgZone) {}

  ngOnInit() {
    this.dataService.getData().subscribe((event) => {
      const data = JSON.parse(event.data);
      this.ngZone.run(() => {
        this.cpuSystemUsage = data.cpu;
        this.memSystemUsage = data.memory;
        this.gpuSystemUsage = data.gpu;
      });
    });
  }
}
