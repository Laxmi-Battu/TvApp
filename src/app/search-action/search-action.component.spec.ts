import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchActionComponent } from './search-action.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { SharedServiceService } from "../shared-service.service";
import { of } from "rxjs";
import { throwError } from 'rxjs';

describe("TvShowDetailsComponent", () => {
  let component: SearchActionComponent;
  let fixture: ComponentFixture<SearchActionComponent>;
  let mockUserService: SharedServiceService;
  let mockData = {
    id: 204,
    url: "https://www.tvmaze.com/shows/204/stargate-sg-1",
    name: "Stargate SG-1",
    type: "Scripted",
    language: "English",
    genres: ["Action", "Adventure", "Science-Fiction"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "1997-07-27",
    ended: "2008-07-29",
    officialSite: "http://stargate.mgm.com/view/series/1/index.html",
    schedule: {
      time: "20:00",
      days: ["Friday"],
    },
    rating: {
      average: 9.3,
    },
    weight: 98,
    network: {
      id: 16,
      name: "Syfy",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 5325,
      thetvdb: 72449,
      imdb: "tt0118480",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/1/3027.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/1/3027.jpg",
    },
    summary:
      "<p><b>Stargate SG-1</b> is a science fiction series based on the original film <i>Stargate</i>. It involves the team SG-1 going on various adventures to different alien worlds through Stargates. Throughout the series they encounter various alien threats and allies including but not limited to the Goa'uld and the Asgard.</p>",
    updated: 1621095271,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/204",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/13654",
      },
    },
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchActionComponent],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [{ provide: SharedServiceService }],
    }).compileComponents();
  }));

 beforeEach(() => {
    fixture = TestBed.createComponent(SearchActionComponent);
    mockUserService = TestBed.inject(SharedServiceService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should call getSearchDetails ", () => {
    spyOn(component, "getSearchDetails").and.callThrough();
    spyOn(mockUserService, "getSearchShows").and.returnValue(of(mockData));
    component.getSearchDetails();
    expect(component.getSearchDetails).toHaveBeenCalled();
  });

  
  it("should call getSearchDetails if get shpows api fail", () => {
    spyOn(component, "getSearchDetails").and.callThrough();
    spyOn(mockUserService, "getSearchShows").and.returnValue(throwError({status: 404}));
    component.getSearchDetails();
    expect(component.getSearchDetails).toHaveBeenCalled();
  });
});

