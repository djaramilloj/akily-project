import { Component, OnInit } from '@angular/core';
import { ActivityProviderService } from '../../providers/activity-provider.service';
import { User, Child, Activity, GraphActivity, Milestone } from '../../models/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  activities: Array<Activity> = [];
  childId: string;

  constructor(
    private activitiesProvider: ActivityProviderService
  ) {
    this.childId = 'myChildId-12345'
  }

  ngOnInit() {
    this.loadRecentActivitiesForChild(this.childId);
  }

  /**
   * 
   * @param childId 
   * @returns the last 3 activities done by the child
   */
  loadRecentActivitiesForChild(childId: string) {
    const graphActivities: Array<GraphActivity> = this.activitiesProvider.fetchGraphActivity(childId);
    graphActivities.forEach(item => {
      const activityInfo: Activity = this.activitiesProvider.fetchActivityById(item.key_id);
      const milestonesToShow: Array<Milestone> = [];
      item.milestones.forEach(milestoneItem => {
        const singleMilestoneInfo: Milestone = this.activitiesProvider.fetchMilestoneById(milestoneItem.key_id);
        milestonesToShow.push(singleMilestoneInfo);
      })
      this.activities.push({...activityInfo, milestonesToShow});
    });
  }

}
