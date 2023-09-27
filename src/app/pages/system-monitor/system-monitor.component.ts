import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, pipe, takeUntil } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-system-monitor',
  templateUrl: './system-monitor.component.html',
  styleUrls: ['./system-monitor.component.css'],
})
export class SystemMonitorComponent implements OnInit, OnDestroy {
  gpuSystemUsage: number = 0;
  memSystemUsage: number = 0;
  cpuSystemUsage: number = 0;
  $destroy = new Subject();

  constructor(
    private dataService: DataService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.getEventMonitor();
    this.subscribeDataMonitor();
  }
  ngOnDestroy(): void {
    this.$destroy.next(null);
    this.$destroy.complete();
  }

  getEventMonitor(): void {
    this.dataService.getData()
    .pipe(takeUntil(this.$destroy))
    .subscribe((event) => {
      this.cdr.detectChanges();
      const data = JSON.parse(event.data);
      this.dataService.dataMonitoring.next({
        cpuSystemUsage: data.cpu,
        memSystemUsage: data.memory,
        gpuSystemUsage: data.gpu,
      });
    });
  }
  subscribeDataMonitor(): void {
    this.dataService.dataMonitoring
    .pipe(takeUntil(this.$destroy))
    .subscribe((res) => {
      this.cpuSystemUsage = res.cpuSystemUsage;
      this.memSystemUsage = res.memSystemUsage;
      this.gpuSystemUsage = res.gpuSystemUsage;
    });
  }
}
