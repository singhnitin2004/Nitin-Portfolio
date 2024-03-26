import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedIndex = 1;
  constructor() {
  }
  mobileMenu: boolean = false;

  openMenu() {
    this.mobileMenu = !this.mobileMenu;
  }

  ngOnInit(): void {
    window.onscroll = () => {
      if (this.mobileMenu) return;
      if (window.pageYOffset >= 0 && window.pageYOffset <= 700) {
        this.selectedIndex = 1;
      }
      else if (window.pageYOffset >= 800 && window.pageYOffset <= 1795) {
        this.selectedIndex = 2;
      }
      else if (window.pageYOffset >= 1795 && window.pageYOffset <= 3095) {
        this.selectedIndex = 3;
      }
      else if (window.pageYOffset >= 3095 && window.pageYOffset <= 4005) {
        this.selectedIndex = 4;
      }
      else if (window.pageYOffset >= 4605 && window.pageYOffset <= 5604) {
        this.selectedIndex = 5;
      }
      else if (window.pageYOffset >= 5604 && window.pageYOffset <= 9261) {
        this.selectedIndex = 6;
      }
    };
  }

  header_variable = false;
  @HostListener("document:scroll")
  scrollfunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.header_variable = true;
    }
    else {
      this.header_variable = false;
    }
  }

}
