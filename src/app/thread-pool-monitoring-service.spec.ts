import { TestBed } from '@angular/core/testing';

import { ThreadPoolMonitoringService } from './thread-pool-monitoring-service';

describe('ThreadPoolMonitoringService', () => {
  let service: ThreadPoolMonitoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreadPoolMonitoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
