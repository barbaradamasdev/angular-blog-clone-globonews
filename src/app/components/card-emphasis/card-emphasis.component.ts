import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-emphasis',
  templateUrl: './card-emphasis.component.html',
  styleUrls: ['../cards.component.css']
})
export class CardEmphasisComponent {
  @Input()
  id:string= '0'
  @Input()
  photoCover:string = ''
  @Input()
  cardTitle:string = ''
}
