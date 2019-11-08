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
      dimensions:[],
    },
    introductionStories : [{}]
  };


  dimensions = [
    { showValue: 'PhysicalDimension',val:1, isChecked: false },
    { showValue: 'SpiritualDimension',val:2, isChecked: false },
    { showValue: 'MentalDimension',val:3, isChecked: false },
    { showValue: 'SocialDimension',val:4, isChecked: false}
  ];


  constructor(public gatewayAggregateCommandResourceService:GatewayAggregateCommandResourceService) {}


  createNewActivity(){
    this.activityAggregate.activityDTO.createdDate=this.getCurrentTime(); 
    this.dimensions.forEach((dimension)=>{
      if(dimension.isChecked==true){
        let d: DimensionDTO={
          id:dimension.val
        }
        this.activityAggregate.activityDTO.dimensions.push(d);
      }
    });
 
    console.log("%%%%%%",this.activityAggregate);
    this.gatewayAggregateCommandResourceService.createActivityUsingPOST(this.activityAggregate).subscribe(
      (res)=>{console.log("***********Respose******",res)});
    
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

getCurrentTime():string{
  let currentTime=new Date();
  let offset=currentTime.getTimezoneOffset();
  var hours=(Math.floor(offset / 60)).toString().replace("-","");
  var minutes=(offset % 60).toString().replace("-","");
  console.log("+++++++  "+(currentTime.toISOString()).split("Z")[0]+"+0"+hours+":"+minutes);

  if(offset<0){
    return (currentTime.toISOString()).split("Z")[0]+"+0"+hours+":"+minutes;
  }
  else{
     return (currentTime.toISOString()).split("Z")[0]+"-0"+hours+":"+minutes;
  }  
}



}
