import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();
  GitHub: string = 'https://github.com/singhnitin2004';
  constructor() { }

  ngOnInit(): void {
  }

}
