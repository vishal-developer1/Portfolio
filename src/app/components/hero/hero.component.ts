import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit  {

ngAfterViewInit(): void {
    const options = {
      strings: [
        'Java Full Stack Developer',
        'Angular | Spring Boot | SQL',
        'Problem Solver & Tech Enthusiast'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    };

    const typed = new Typed('#typing-text', options);
  }
}
