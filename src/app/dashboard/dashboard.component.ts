import { Component, OnDestroy, OnInit } from "@angular/core";
import { SharedServiceService } from "../shared-service.service";
import { Subscription } from "rxjs";
import { Tvshow } from "../interfaces/tvshow";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit, OnDestroy {
  allTVShows: any;
  topRatedShows = [];
  tempdata = [];
  genresList: string[];
  groupbyjson: any[];
  genresArray: string[];
  getallShowsSubscription: Subscription = new Subscription();
  dashboardLoad = false;
  errDashboardLoad = false;
  constructor(public tvShows: SharedServiceService) {}

  ngOnInit(): void {
    this.getAllShowsAndDetails();
  }
  getGenresList(data) {
    let showList = [];
    let genresList = [];
    data.forEach((item) => {
      genresList = genresList.concat(item.genres);
    });
    genresList = Array.from(new Set(genresList));

    genresList.reduce((acc, res) => {
      const genreByShow = data.filter((show) => show.genres.includes(res));  // filter funtionality groupby to the geners
      const showInfo = {
        showName: `${res} shows`,
        showList: genreByShow
      };
      showList.push(showInfo)
    }, []);

    let popularShowsList = this.getSortedPopularShows(data);
     
    showList.unshift(popularShowsList);
    console.log('listtt',showList);
    return showList;
  }

getSortedPopularShows(data){
  let sorted =  data.sort((a: any, b: any) => b.rating.average - a.rating.average);
  const showInfo = {
    showName: `Popular shows`,
    showList: sorted
  };
  return showInfo;
}

  getAllShowsAndDetails() {
    this.dashboardLoad = true;
    this.errDashboardLoad = false;
    this.getallShowsSubscription = this.tvShows.getShows().subscribe(
      (data: Tvshow[]) => {
        // console.log(getGenresList(data));

        this.allTVShows = data;
        this.getGenresList(data)
        // this.genresList = getGenresList(data)// output genres
        //console.log(this.genresList);
         this.groupbyjson = this.getGenresList(data);
        console.log(this.groupbyjson);
        this.topRatedShows = this.allTVShows
          .sort((a: any, b: any) => b.rating.average - a.rating.average)
          .slice(0, 20);
        this.dashboardLoad = false;
        this.errDashboardLoad = false;
      },
      (error) => {
        this.dashboardLoad = false;
        this.errDashboardLoad = true;
      }
    );
  }

  ngOnDestroy() {
    if (this.getallShowsSubscription)
      this.getallShowsSubscription.unsubscribe();
  }
}
