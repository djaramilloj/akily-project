import { Component, Input } from '@angular/core';
import { Activity } from '../../models/common';

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.scss']
})
export class RecentActivitiesComponent {

  @Input () activity: Activity;
  public incomingActivity: Activity;

  constructor() { }

  ngOnChanges() {
    this.incomingActivity = this.activity;
  }

}
