import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';
import { Subscription } from 'rxjs';
import { Tvshow } from '../interfaces/tvshow';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,OnDestroy {
  allTVShows :any;
  topRatedShows = [];
  horrorShows = [];
  tempdata =[];
  genresList:any[];
  groupbyjson:any[];
  genresArray: any;
;
  comedyShows = [];
  getallShowsSubscription: Subscription = new Subscription;
  dashboardLoad = false;
  errDashboardLoad = false;
  constructor(public tvShows:SharedServiceService) { }

  ngOnInit(): void {
    this.getAllShowsAndDetails();
  }

  getAllShowsAndDetails(){
    this.dashboardLoad = true;
    this.errDashboardLoad = false;
    this.getallShowsSubscription = this.tvShows.getShows().subscribe((data:Tvshow)=>{
      function getGenresList(data) {
        let result = [];
        let genresArr = [];
        data.forEach((e) => {
            genresArr = genresArr.concat(e.genres)
        })
    
        genresArr = Array.from(new Set(genresArr));
        //console.log(genresArr);
    
        data.forEach((e) => {
    
            for (let gen of genresArr) {
               // console.log('1',gen)
                if (e.genres.includes(gen)) {
                   // console.log('2',gen)
                    if(result[gen]){
                      //  console.log('3',gen)
                        result[gen].push(e)
                    }else{
                       // console.log('33',gen)
                        result[gen] = [];
                        result[gen].push(e)
                    }
                    // console.log('res',result);
                }
            }
    
        })
    
        return result;
    }
    
    console.log(getGenresList(data)); 
      
        this.allTVShows = data;  
        // this.genresList = getGenresList(data)// output genres
        //console.log(this.genresList);
        this.groupbyjson= getGenresList(data); 
        console.log(this.groupbyjson);
       //this.genresArray = genresArr.slice(0,10);
        //this.genresList =[...this.groupbyjson.Drama.slice(0,20),...this.groupbyjson.Horror.slice(0,20)]
        this.topRatedShows = this.allTVShows.sort((a: any,b: any)=> b.rating.average - a.rating.average).slice(0,20)
        //this.horrorShows = this.allTVShows.filter((item:any)=>item.genres.includes("Horror")).slice(0,20);
        //this.comedyShows = this.allTVShows.filter((item:any)=>item.genres.includes("Comedy")).slice(0,20);  
        this.dashboardLoad = false;  
        this.errDashboardLoad = false;   
     },
     error =>{
      this.dashboardLoad = false;
      this.errDashboardLoad = true;
    });
    }

  ngOnDestroy(){
    if(this.getallShowsSubscription)
      this.getallShowsSubscription.unsubscribe();
  }
}
