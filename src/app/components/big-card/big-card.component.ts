import { Component, Input } from '@angular/core';
import { CardCarouselComponent } from '../card-carousel/card-carousel.component';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input()
  Id:string= '0'
  @Input()
  photoCover:string = ''
  @Input()
  cardTitle:string = ''
  @Input()
  cardDescription:string = ''
  @Input()
  cardDate:string = ''
  @Input()
  cardTag:string = ''
}
