import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ThreadPoolStatisticComponent} from "./thread-pool-statistic.component";

@Injectable({
  providedIn: 'root'
})
export class ThreadPoolMonitoringService {
  monitoringUrl = 'http://localhost:8080/actuator/threadPoolMonitoring';
  apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) { }
  getBackgroundThreadPoolActuator(): Observable<ThreadPoolStatisticComponent> {
    return this.http.get<ThreadPoolStatisticComponent>(`${this.monitoringUrl}/backgroundThreadPoolExecutor`);
  }

  getAllThreadPoolsActuator(): Observable<ThreadPoolStatisticComponent[]> {
    return this.http.get<ThreadPoolStatisticComponent[]>(`${this.monitoringUrl}/allThreadPoolExecutors`);
  }

  makeBackendDoSomeRandomWork() {
    return this.http.get(`${this.apiUrl}/jobs/startRandomJob`);
  }
}
