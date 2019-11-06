import { Component } from '@angular/core';
import { ActivityAggregate, DimensionDTO } from '../api/models';
import {IntroductionStoryDTO} from '../api/models';
import { GatewayAggregateCommandResourceService } from '../api/services';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  activityPagesData: number[]=[];

  fileToUpload:File;

  fileUrl:string='';

  activityAggregate: ActivityAggregate={
    activityDTO:{
      dimensions:[{   
      }],
    },
    introductionStories : [{}]
  };



  dimensionDTO:DimensionDTO={};
  dimensions = [
    { val: 'PhysicalDimension', isChecked: false },
    { val: 'SpiritualDimension', isChecked: false },
    { val: 'MentalDimension', isChecked: false },
    { val: 'SocialDimension', isChecked: false}
  ];


  constructor(public gatewayAggregateCommandResourceService:GatewayAggregateCommandResourceService) {}


  createNewActivity(){
    this.dimensions.forEach((dimension)=>{
      if(dimension.isChecked==true){
        let d: DimensionDTO={
          name:dimension.val
        }
        this.activityAggregate.activityDTO.dimensions.push(d);
      }
    });

    this.gatewayAggregateCommandResourceService.createActivityUsingPOST(this.activityAggregate).subscribe(
      (res)=>{console.log("***********Respose******",res)});
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
      console.log("###########",this.activityAggregate);
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");

  }

  setActivityPagesDataSize(){
    for (let i = 0; i < this.activityAggregate.activityDTO.noOfPages; i++) {
      this.activityAggregate.introductionStories[i]={
        activityId:null, 
        id: null,
        image:'',
        imageContentType: '',
        story: ''
      };
    }
  }


  onSelectFile(event,i) {

    this.fileToUpload = event.target.files.item(0);

    const freader = new FileReader();
    

    freader.onload = (ev: any) => {

      this.fileUrl = ev.target.result;

      let imageBase64 = this.fileUrl.substring(this.fileUrl.indexOf(',') + 1);
      let imageType = this.fileToUpload.type;

      this.activityAggregate.introductionStories[i].image=imageBase64;
      this.activityAggregate.introductionStories[i].imageContentType=imageType;

      console.log(imageType,imageBase64);
    };

    freader.readAsDataURL(this.fileToUpload);

}



}
