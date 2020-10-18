import { TestBed } from '@angular/core/testing';

import { DataResumeService } from './data-resume.service';

describe('DataResumeService', () => {
  let service: DataResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
