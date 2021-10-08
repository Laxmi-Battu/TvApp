import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-search-action',
  templateUrl: './search-action.component.html',
  styleUrls: ['./search-action.component.scss']
})
export class SearchActionComponent implements OnInit {

  constructor(private ShowService:SharedServiceService,private activeRoute:ActivatedRoute) { }

  userSearch = "";
  getUserSearchDetailsSubscription: Subscription = new Subscription;
  searchResult : any = "";
  searchDetailsLoad = false;
  errSearchDetailsLoad = false;

  ngOnInit(): void {
    this.accessingRouteParameter();
  }

  accessingRouteParameter(){
    this.activeRoute.params.forEach((params: Params)=>{
      if(params['SearchText'] !== undefined){
        this.userSearch = params['SearchText'];
        this.getSearchDetails();
      }else{
        this.userSearch = "";
      }
    });
  }


  getSearchDetails(){
    this.searchDetailsLoad = true;
    this.errSearchDetailsLoad = false;
    this.getUserSearchDetailsSubscription = this.ShowService.getSearchShows(this.userSearch).subscribe((data)=>{ 
        this.searchDetailsLoad = false;  
        this.errSearchDetailsLoad = false; 
        this.searchResult = data;       
      
    },error =>{
      this.searchDetailsLoad = false;
      this.errSearchDetailsLoad = true;
    });
  }

  ngOnDestroy(){

    if(this.getUserSearchDetailsSubscription)
      this.getUserSearchDetailsSubscription.unsubscribe();

  }

}
