import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.css']
})
export class CardCarouselComponent {
  @Input()
  id:string= '0'

  carouselSlide:boolean = false;

  carouselSlider() {
    if (this.carouselSlide) {
      this.carouselSlide = false;
    } else {
      this.carouselSlide = true;
    }
  }


}
