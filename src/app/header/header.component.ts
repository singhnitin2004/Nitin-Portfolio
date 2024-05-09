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


  handleMenuItemClick(index: number) {
    this.selectedIndex = index;
    this.closeMobileMenu();
  }

  closeMobileMenu() {
    this.mobileMenu = false;
  }

  ngOnInit(): void {
    window.onscroll = () => {
      if (this.mobileMenu) return;
      if (window.pageYOffset >= 0 && window.pageYOffset <= 777) {
        this.selectedIndex = 1;
      }
      else if (window.pageYOffset >= 777 && window.pageYOffset <= 1795) {
        this.selectedIndex = 4;
      }
      else if (window.pageYOffset >= 1795 && window.pageYOffset <= 3095) {
        this.selectedIndex = 2;
      }
      else if (window.pageYOffset >= 3095 && window.pageYOffset <= 4185.5556640625) {
        this.selectedIndex = 3;
      }
      else if (window.pageYOffset >= 4185.5556640625 && window.pageYOffset <= 5004) {
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
