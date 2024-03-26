import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  lstExperience = [{
    image: 'assets/image/upwork.webp',
    heading: 'UPWORK',
    name: 'Freelance',
    description: 'A Top Rated Freelancer at Upwork, an American freelancing platform and the largest network of independent professionals to get things done, from quick turnarounds to big transformations.',
    url: environment.UPWORK,
  },
  {
    image: 'assets/image/binaryclock.png',
    heading: 'Binary Clock',
    name: 'Frontand Developer',
    description: 'A logical binary clock is a timekeeping device that displays the current time using a binary system to represent hours, minutes, and seconds. Unlike traditional analog or digital clocks, which typically use decimal numbering systems, a binary clock expresses time in binary code, where each digit is represented by a combination of on and off states of lights or digits.',
    url: environment.Binaryclock,
  },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
