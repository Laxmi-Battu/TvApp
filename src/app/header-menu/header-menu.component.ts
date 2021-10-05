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
    // if(
    //   this.router.snapshot.params["id"] != this.searchTxt
    // ){
    //   this.searchTxt = " "
    // }
  }
  // toggle (){
  //   if(this.displayNavbar == '0') {
  //     this.displayNavbar = '1';
  //   //  alert(this.displayNavbar);
  // } if(this.displayNavbar == '1') {
  // //    alert("1 - Changing to 0");
  //     this.displayNavbar = '0';
  // } else {
  //     this.displayNavbar = '1';
  // }
  //}
onSubmit(formData:any){
    this.route.navigate(['/Search',formData.value.searchTxt])
    this.searchTxt = " ";
  }
}
