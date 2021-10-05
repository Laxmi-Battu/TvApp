import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedServiceService } from '../shared-service.service';
import { Location } from '@angular/common';
// import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.scss']
})
export class TvShowDetailsComponent implements OnInit {

  showDetailsId = 0;
  showDetailsSubscription: Subscription = new Subscription;
  showData:any="";
  showDetailsLoad = false;
  errShowDetailsLoad = false;

  constructor(private activeRoute:ActivatedRoute,private ShowService:SharedServiceService,private location: Location) { }

  ngOnInit(): void {
    this.accessingRouteParameter();
  }
  accessingRouteParameter(){
    this.activeRoute.params.forEach((params: Params)=>{
      if(params['id'] !== undefined){
        this.showDetailsId = params['id'];
        this.getShowDetailsData();
      }else{
        this.showDetailsId = 0;
      }
    });
  }
  getShowDetailsData(){
    this.showDetailsLoad = true;
    this.errShowDetailsLoad = false;
    this.showDetailsSubscription = this.ShowService.getSearchdetails(this.showDetailsId).subscribe((data)=>{
      try{
        this.showDetailsLoad = false;
        this.errShowDetailsLoad = false;
        this.showData = data;
      }catch(e){
        this.showDetailsLoad = false;
        this.errShowDetailsLoad = true;
      }
    },error =>{
      this.showDetailsLoad = false;
      this.errShowDetailsLoad = true;
    });
  }
  ngOnDestroy(){
    if(this.showDetailsSubscription)
      this.showDetailsSubscription.unsubscribe();
  }
back(){
  this.location.back();
}

}
