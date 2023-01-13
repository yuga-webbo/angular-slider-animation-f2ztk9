import { Component } from '@angular/core';
import { trigger, transition, animate, style , state } from '@angular/animations'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger("fade", [
  state("void", style({ opacity: 0 })),
  transition("void <=> *", [animate("0.5s ease-in-out")])
  ])]
})
export class AppComponent {

  counter = 0;
  slideItems = [
    { src: 'https://placeimg.com/600/600/any', title: 'Title 1' },
    { src: 'https://placeimg.com/600/600/nature', title: 'Title 2' },
    { src: 'https://placeimg.com/600/600/sepia', title: 'Title 3' },
    { src: 'https://placeimg.com/600/600/people', title: 'Title 4' },
    { src: 'https://placeimg.com/600/600/tech', title: 'Title 5' }
  ];

  showNextImage() {
    if (this.counter < this.slideItems.length -1) {
      this.counter += 1;
    }
  }

  showPreviousImage() {
    if (this.counter >= 1) {
      this.counter = this.counter - 1;
    }
  }
}
