export class ThreadPoolStatisticComponent {
  threadNamePrefix: string;
  availableProcessors: number;
  activeThreadsCount: number;
  maxPoolSize: number;
  queuedTask: number;
  queueRemainingCapacity: number;
  completedTaskCount: number;
  systemCpuLoadPercent: number;
  processCpuLoadPercent: number;

  constructor(threadPoolStatistic : any){
    this.threadNamePrefix = threadPoolStatistic.threadNamePrefix;
    this.availableProcessors = threadPoolStatistic.availableProcessors;
    this.activeThreadsCount = threadPoolStatistic.activeThreadsCount;
    this.maxPoolSize = threadPoolStatistic.maxPoolSize;
    this.queuedTask = threadPoolStatistic.queuedTask;
    this.queueRemainingCapacity = threadPoolStatistic.queueRemainingCapacity;
    this.completedTaskCount = threadPoolStatistic.completedTaskCount;
    this.systemCpuLoadPercent = threadPoolStatistic.systemCpuLoadPercent;
    this.processCpuLoadPercent = threadPoolStatistic.processCpuLoadPercent;
  }
}
