import { Component, Input } from '@angular/core';
/* import { CardEmphasisComponent } from './card-emphasis/card-emphasis.component';
import { CardJournalsComponent } from './card-journals/card-journals.component';
import { CardSocialMediaComponent } from './card-social-media/card-social-media.component'; */

@Component({
  selector: 'app-aside-card',
  templateUrl: './aside-card.component.html',
  styleUrls: ['./aside-card.component.css', './aside-card.responsive.component.css']
})
export class AsideCardComponent {
  @Input()
  Id:string= '0'
}
