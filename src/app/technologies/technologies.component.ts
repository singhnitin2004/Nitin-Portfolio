import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  developments = [
    {
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
      name: 'HTML5',
      icon: 'assets/svg/html.svg'
    }, {
      name: 'CSS3',
      icon: 'assets/svg/css3.svg'
    }, {
      name: 'Next.js',
      icon: 'assets/svg/next.svg'
    }]
  },
   {
    category: 'LIBRARIES',
    list: [{
      name: 'Ngrx',
      icon: 'assets/svg/ngrx.svg'
    },{
      name: 'Bootstrap',
      icon: 'assets/svg/bootstrap.svg'
    }, {
      name: 'Tailwind CSS',
      icon: 'assets/svg/tailwind.svg'
    }]
  }, {
    category: 'BACKEND',
    list: [{
      name: 'MySQL',
      icon: 'assets/svg/mysql.svg'
    },{
      name: 'SQLite',
      icon: 'assets/svg/sqlite.svg'
    }]
  },
];

  selectedCategory: string | null = null;

  ngOnInit(): void {
    this.selectCategory('TECHNOLOGIES');
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  clearSelection(): void {
    this.selectedCategory = null;
  }

  isCategorySelected(category: string): boolean {
    return this.selectedCategory === category;
  }
}
