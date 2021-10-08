import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Tvshow } from './interfaces/tvshow';
@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor(private http:HttpClient) { }

getShows() {
  return this.http.get<Tvshow[]>("https://api.tvmaze.com/shows");
}

getSearchShows(SearchBox: string){
  return this.http.get<Tvshow>("https://api.tvmaze.com/search/shows?q="+ SearchBox);
}
getSearchdetails(SearchId:number){
  return this.http.get<Tvshow>("https://api.tvmaze.com/lookup/shows?thetvdb=" +SearchId);
}
}
