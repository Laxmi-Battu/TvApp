import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { SharedServiceService } from './shared-service.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchActionComponent } from './search-action/search-action.component';
import { FooterComponent } from './footer/footer.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
// import {DemoMaterialModule} from '../app/header-menu/material-menu.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { BackButtonDirective } from './back-button.directive';
//import { NavigationService } from './navigation.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    DashboardComponent,
    SearchActionComponent,
    FooterComponent,
    TvShowDetailsComponent,
    PageNotFoundComponent,
    //BackButtonDirective
  ],
  imports: [
    // DemoMaterialModule,
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
