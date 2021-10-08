import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
searchTxt: string ='';
isShown:boolean=false;
public isCollapsed = true;
  constructor(public route:Router) {

   }

  ngOnInit(): void {
  }
onSubmit(formData:any){
    this.route.navigate(['/Search',formData.value.searchTxt])
    this.searchTxt = " ";
  }
}
