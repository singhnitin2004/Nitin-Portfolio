import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Blog } from '../app.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  constructor(private appService: AppService,) { }

  ngOnInit(): void {
  }

}
