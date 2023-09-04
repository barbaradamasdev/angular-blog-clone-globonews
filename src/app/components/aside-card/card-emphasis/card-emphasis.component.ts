import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-emphasis',
  templateUrl: './card-emphasis.component.html',
  styleUrls: ['./card-emphasis.component.css', '../../aside-card/aside-card.component.css', '../../aside-card/aside-card.responsive.component.css']
})
export class CardEmphasisComponent {
  @Input()
  Id:string= '0'
  @Input()
  photoCover:string = ''
  @Input()
  cardTitle:string = ''
}
