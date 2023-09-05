import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-social-media',
  templateUrl: './card-social-media.component.html',
  styleUrls: ['../cards.component.css']
})
export class CardSocialMediaComponent {
  @Input()
  id:string= '0'
  @Input()
  boxTitle:string = ''
  @Input()
  photoCover:string = ''
  @Input()
  cardTitle:string = ''
  @Input()
  subTitle:string = ''

  @Input()
  miniCardTitle1:string = ''
  @Input()
  miniCardPhoto1:string = ''
  @Input()
  miniCardTitle2:string = ''
  @Input()
  miniCardPhoto2:string = ''
  @Input()
  miniCardTitle3:string = ''
  @Input()
  miniCardPhoto3:string = ''
}
