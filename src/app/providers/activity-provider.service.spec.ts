import { TestBed } from '@angular/core/testing';

import { ActivityProviderService } from './activity-provider.service';
import { MILESTONES_MOCK, ACTIVITIES_MOCK } from '../models/mocks';

describe('ActivityProviderService', () => {
  let service: ActivityProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should return activity with id 1`, () => {
    const result =  service.fetchActivityById('1');
    expect(result).toEqual(ACTIVITIES_MOCK[0]);
  });

  it(`should return array of GrapghActivity related to child with id 'myChildId-12345'`, () => {
    const result =  service.fetchGraphActivity('myChildId-12345');
    expect(result[0].id).toEqual('a1');
    expect(result[1].id).toEqual('a2');
    expect(result[2].id).toEqual('a3');
  });

  it(`should return milestone with id 1`, () => {
    const result =  service.fetchMilestoneById('1');
    expect(result).toEqual(MILESTONES_MOCK[0]);
  });
});
