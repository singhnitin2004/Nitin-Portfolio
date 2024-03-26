import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  developments = [{
    category: 'TECHNOLOGIES',
    list: [{
      name: 'Angular',
      icon: 'assets/svg/angular.svg'
    },{
      name: 'Javascript',
      icon: 'assets/svg/javascript.svg'
    }, {
      name: 'Typescript',
      icon: 'assets/svg/typescript.svg'
    }, {
      name: 'Angular',
      icon: 'assets/svg/html5.svg'
    }, {
      name: 'CSS',
      icon: 'assets/svg/css3.svg'
    }, {
      name: 'SCSS',
      icon: 'assets/svg/scss.svg'
    }]
  }, {
    category: 'LIBRARIES',
    list: [{
      name: 'Ngrx',
      icon: 'assets/svg/ngrx.svg'
    },{
      name: 'Bootstrap',
      icon: 'assets/svg/bootstrap.svg'
    }, {
      name: 'Tailwind Css',
      icon: 'assets/svg/tailwind.svg'
    }, ]
  }, {
    category: 'DATABASES',
    list: [ {
      name: 'MySql',
      icon: 'assets/svg/mysql.svg'
    },{
      name: 'Sqlite',
      icon: 'assets/svg/sqlite.svg'
    }]
  }, ]
  ngOnInit(): void {

  }

}
