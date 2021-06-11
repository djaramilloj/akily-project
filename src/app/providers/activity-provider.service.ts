import { Injectable } from '@angular/core';
import { Child, GraphActivity, Activity, Milestone } from '../models/common';
import { CHILDREN_MOCK, GRAPH_ACTIVITY_MOCK, ACTIVITIES_MOCK, MILESTONES_MOCK } from '../models/mocks';

@Injectable({
  providedIn: 'root'
})
export class ActivityProviderService {

  constructor() { }

  /**
   * 
   * @param childId 
   * @returns the activities amd graphActivity by childId
   */
  fetchGraphActivity(childId: string): Array<GraphActivity> {
    let result: Array<GraphActivity> = [];
    const childInfo: Child = CHILDREN_MOCK.filter(item => item.childId === childId)[0];
    childInfo.scoreBoard.forEach(score => {
      const actGraph: GraphActivity = GRAPH_ACTIVITY_MOCK.filter(graphMockItem => graphMockItem.id === score.activityId)[0];
      if (actGraph) result.push(actGraph);
    });
    return result;
  }

  /**
   * 
   * @param activityId // graph activity id
   * @returns activity info based on Id coming from GraphActivity
   */
  fetchActivityById (activityId: string): Activity {
    return ACTIVITIES_MOCK.filter(item => item.id === activityId)[0];
  }

  /**
   * 
   * @param milestoneId // graph milestone id
   * @returns milestone info based on Id coming from GraphMilestone
   */
  fetchMilestoneById (milestoneId: string): Milestone {
    return MILESTONES_MOCK.filter(item => item.id === milestoneId)[0];
  }
}
