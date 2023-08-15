import {Component} from '@angular/core';
import {ThreadPoolMonitoringService} from "./thread-pool-monitoring-service";
import {ThreadPoolStatisticComponent} from "./thread-pool-statistic.component";
import {Subscription, interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ThreadPoolMonitoring';
  basicData: any;
  backgroundColor: string[] = [
    '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6),
    '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
  ]

  private updateSubscription: Subscription;

  constructor(private threadPoolMonitoringService: ThreadPoolMonitoringService) {
    this.getStatisticForCharts();
    this.updateSubscription = interval(100).subscribe(
      () => {
        this.getStatisticForCharts()
      });
  }

  private getStatisticForCharts() {
    this.threadPoolMonitoringService.getAllThreadPoolsActuator().subscribe((data) => {
      // Получаем список полей класса ДТОшки для вывода на инфографику;
      let threadPoolStatistic = new ThreadPoolStatisticComponent(ThreadPoolStatisticComponent);
      let labels = Object.getOwnPropertyNames(threadPoolStatistic);

      let datasets: any[] = [];
      let i = 0;
      data.forEach(threadPoolStatistic => {
        let dataset = {
          label: threadPoolStatistic.threadNamePrefix,
          backgroundColor: this.backgroundColor[i],
          data: [threadPoolStatistic.threadNamePrefix,
            threadPoolStatistic.availableProcessors,
            threadPoolStatistic.activeThreadsCount,
            threadPoolStatistic.maxPoolSize,
            threadPoolStatistic.queuedTask,
            threadPoolStatistic.queueRemainingCapacity,
            threadPoolStatistic.completedTaskCount,
            threadPoolStatistic.systemCpuLoadPercent,
            threadPoolStatistic.processCpuLoadPercent]
        };
        datasets.push(dataset);
        i++;
      })

      this.basicData = {
        labels: labels,
        datasets: datasets
      }
    });
  }

  makeBackendDoSomeRandomWork(){
    this.threadPoolMonitoringService.makeBackendDoSomeRandomWork().subscribe();
  }
}
