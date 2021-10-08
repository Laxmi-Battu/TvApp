import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchActionComponent } from './search-action/search-action.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  {path :'', redirectTo:'Dashboard', pathMatch: 'full'},
  {path : 'Dashboard', component:DashboardComponent},
  { path: 'Search/:SearchText', component:SearchActionComponent },
  { path: 'ShowDetails/:id', component:TvShowDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
