import { Component, OnInit } from '@angular/core';
import { GatewayAggregateQueryResourceService } from '../api/services';
import { ActivityDTO } from '../api/models';

@Component({
  selector: 'app-view-activity',
  templateUrl: './view-activity.page.html',
  styleUrls: ['./view-activity.page.scss'],
})
export class ViewActivityPage implements OnInit {

  activityDTO:ActivityDTO[]=[];

  constructor(public gatewayAggregateQueryResourceService:GatewayAggregateQueryResourceService) { }

  ngOnInit() {
   this.gatewayAggregateQueryResourceService.getAllActivitiesUsingGET().subscribe((result)=>{this.activityDTO=result})
  }

}
