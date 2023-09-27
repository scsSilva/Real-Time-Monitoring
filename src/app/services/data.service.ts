import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = 'http://127.0.0.1:5000/usage-data';
  dataMonitoring: Subject<any> = new Subject();

  constructor(private http: HttpClient) {}

  getData(): Observable<MessageEvent> {
    const eventSource = new EventSource(this.url);

    return new Observable((observer) => {
      eventSource.onmessage = (event: MessageEvent) => {
        observer.next(event);
      };

      eventSource.onerror = (error) => {
        observer.error(error);
        eventSource.close();
      };
    });
  }
}
