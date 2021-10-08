import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";
import { SharedServiceService } from "../shared-service.service";
import { DashboardComponent } from './dashboard.component';
import { of } from "rxjs";
import { throwError } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockUserService: SharedServiceService;
  let mockResp = {
    "id": 1,
    "url": "https://www.tvmaze.com/shows/1/under-the-dome",
    "name": "Under the Dome",
    "type": "Scripted",
    "language": "English",
    "genres": [
        "Drama",
        "Science-Fiction",
        "Thriller"
    ],
    "status": "Ended",
    "runtime": 60,
    "averageRuntime": 60,
    "premiered": "2013-06-24",
    "ended": "2015-09-10",
    "officialSite": "http://www.cbs.com/shows/under-the-dome/",
    "schedule": {
        "time": "22:00",
        "days": [
            "Thursday"
        ]
    },
    "rating": {
        "average": 6.5
    },
    "weight": 98,
    "network": {
        "id": 2,
        "name": "CBS",
        "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
        }
    },
    "webChannel": null,
    "dvdCountry": null,
    "externals": {
        "tvrage": 25988,
        "thetvdb": 264492,
        "imdb": "tt1553656"
    },
    "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
    },
    "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
    "updated": 1631010933,
    "_links": {
        "self": {
            "href": "https://api.tvmaze.com/shows/1"
        },
        "previousepisode": {
            "href": "https://api.tvmaze.com/episodes/185054"
        }
    }
};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [HttpClientModule],
      providers: [{ provide: SharedServiceService }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    mockUserService = TestBed.inject(SharedServiceService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call getAllShowsAndDetails ", () => {
    spyOn(component, "getAllShowsAndDetails").and.callThrough();
    spyOn(mockUserService, "getShows").and.returnValue(of([mockResp]));
    component.getAllShowsAndDetails();
    expect(component.getAllShowsAndDetails).toHaveBeenCalled();
  });

  it("should call getAllShowsAndDetails if get shpows api fail", () => {
    spyOn(component, "getAllShowsAndDetails").and.callThrough();
    spyOn(mockUserService, "getShows").and.returnValue(throwError({status: 404}));
    component.getAllShowsAndDetails();
    expect(component.getAllShowsAndDetails).toHaveBeenCalled();
  });
});
